# Tote Box &middot; ![license](https://img.shields.io/github/license/nicolaszhao/tote-box.svg?style=flat-square) ![npm (scoped)](https://img.shields.io/npm/v/tote-box.svg?style=flat-square) 
NZ 的个人工具库

## 如何使用？

### ESModules(in webpack builder or Rollup)

```javascript
import { parseTextPlaceholder } from 'tote-box';
parseTextPlaceholder('Hello, {name}!', { name: 'NZ' });
```

### NodeJS

```js
const { parseTextPlaceholder } = require('tote-box')
parseTextPlaceholder('Hello, {name}!', { name: 'NZ' });
```

### In Browser

```html
<script src="tote-box.js"></script>
<script>
  ToteBox.parseTextPlaceholder('Hello, {name}!', { name: 'NZ' });
</script>
```

## ability

### listenPageVisibility( handler )

### isElementInViewport( element )

### lazyLoadImage( [ dataSrcAttr = 'data-src', container = document ] )

### cache

#### cache.get( key )

#### cache.set( key, value )

#### cache.remove( key )

#### cache.clear()

### cacheTable

#### cacheTable.get( primaryKey, secondaryKey )

#### cacheTable.set( primaryKey, secondaryKey, value )

#### cacheTable.remote( primaryKey, secondaryKey )

#### cacheTable.clear( primaryKey )

### cookie

#### cookie.get( name )
#### cookie.set( name,  value [, options ] )

options: { expires, path, domain, secure }

#### cookie.remove( name [, options ] )

options: { path, domain, secure }

## array

### arrayToTree( data [, options ] )

options: { id = 'id', parentId = 'parentId', rootParentId = 0, children = 'children' }

### chunk( data, process [, context, duration = 100 ] )

### batch( data, process [, context, cb, options ] )

options: { runDuration = 25, chunkDuration = 50 }


## history

### historyInst.getPrev()

### historyInst.getNext()

### historyInst.size()

### historyInst.add( url )

### historyInst.find( url )

### historyInst.direct( url )

## http

### http.get( url [ , data, options ] )

### http.post( url [ , data, options ] )

### http.put( url [ , data, options ] )

### http.patch( url [ , data, options ] )

### http.delete( url [ , data, options ] )

### http.defaults

## string

### parseTextPlaceholder( text, data [ , dataReplaceable ] )

### parseNumberPlaceholder( text, …params )

### trim( text )

### formatSize( bytes )

### html

#### html.entityify( text )

#### html.deentityify( text )

#### html.strip( text )

#### html.escape( text )

#### html.filter( text, maxlength )

## date

### isLeapYear( year )

### parseDate( format, value )

### formatDate( format, date )

## time

### timeParser( time [ , units = [ '年', '月', '周', '天', '小时', '分钟', '秒' ] ] )

### countdown( value [ , { onStart, onProgress, onEnd }, context ] )

## util

### type( obj )

### deepAssign( target, source1 [ , source2... ] )

### random(a, b)

## query

### getQuerys( [ url ] )

### addQuerys( [ url, querys ] )

### querys( [ url, querys ] )

## License

[MIT](LICENSE)