
const regUrl = /^([^?#]+)(\?[^#]+)?(#.+)?/;
const regQuery = /^([^=]+)(?:=(.*))?$/;
const cache = {};

export default function Query(url) {
  if (!url) {
    url = typeof location !== 'undefined' ? location.href : '';
  }

  const [, baseUrl = '', search = '', hash = ''] = regUrl.exec(url) || [];
  let qs = {};

  if (url && cache[url]) {
    qs = { ...cache[url] };
  } else if (search) {
    const params = search.substring(1).split('&');

    for (let i = 0; i < params.length; i++) {
      const queryMatch = regQuery.exec(params[i]);

      if (queryMatch) {
        let [, name, value] = queryMatch;

        try {
          name = decodeURIComponent(name);

          // maybe has: URI malformed error
          value = value ? decodeURIComponent(value) : '';
        } catch (err) {
          console.log(`parse url querys error, ${name}=${value}`);
          value = '';
        }

        if (/^(true|false)$/.test(value)) {
          value = JSON.parse(RegExp.$1);
        } else if (/^\d+$/.test(value)) {
          value = +value;
        }

        qs[name] = value;
      }
    }

    cache[url] = { ...qs };
  }

  return {
    values() {
      return qs;
    },
    add(values = {}) {
      qs = { ...qs, ...values };
      return this;
    },

    // querys: String | Array
    remove(querys = []) {
      if (typeof querys === 'string') {
        querys = [querys];
      }

      let i = querys.length;

      while (i--) {
        delete qs[querys[i]];
      }

      return this;
    },

    // querys: String | Array
    // 如果 querys 为数组，必须全部匹配，否则返回 false
    has(querys = []) {
      if (typeof querys === 'string') {
        querys = [querys];
      }
      if (!querys.length) {
        return false;
      }
      return querys.every(name => qs[name]);
    },
    href() {
      let queryString = Object.keys(qs)
        .map((name) => {
          const value = typeof qs[name] !== 'undefined' ? encodeURIComponent(qs[name]) : '';
          name = encodeURIComponent(name);
          return `${name}=${value}`;
        })
        .join('&');

      if (queryString) {
        queryString = `?${queryString}`;
      }

      return `${baseUrl}${queryString}${hash}`;
    },
  };
}