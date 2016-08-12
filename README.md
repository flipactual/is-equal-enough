[![flipactual](https://img.shields.io/badge/😋-flipactual-43A6F6.svg?style=flat-square)](https://flipactual.com/)
[![Travis](https://img.shields.io/travis/flipactual/is-equal-enough.svg?style=flat-square)](https://travis-ci.org/flipactual/is-equal-enough/)
[![Node](https://img.shields.io/node/v/is-equal-enough.svg?style=flat-square)](http://npmjs.com/package/is-equal-enough)
[![NPM](https://img.shields.io/npm/v/is-equal-enough.svg?style=flat-square)](http://npmjs.com/package/is-equal-enough)

## Functions

<dl>
<dt><a href="#isEqualEnough">isEqualEnough(tolerance)</a> ⇒ <code><a href="#instantiatedIsEqualEnough">instantiatedIsEqualEnough</a></code></dt>
<dd><p>Create a function with specified tolerance for comparing numbers.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#instantiatedIsEqualEnough">instantiatedIsEqualEnough</a> ⇒ <code>Boolean</code></dt>
<dd></dd>
</dl>

<a name="isEqualEnough"></a>

## isEqualEnough(tolerance) ⇒ <code>[instantiatedIsEqualEnough](#instantiatedIsEqualEnough)</code>
Create a function with specified tolerance for comparing numbers.

**Kind**: global function  
**Returns**: <code>[instantiatedIsEqualEnough](#instantiatedIsEqualEnough)</code> - Instatiated function with tolerance set.  

| Param | Type | Description |
| --- | --- | --- |
| tolerance | <code>Number</code> | The acceptable tolerance. |

**Example**  
```js
const isEqualEnough = require('is-equal-enough')(Number.EPSILON);
// → instantiatedIsEqualEnough
```
<a name="instantiatedIsEqualEnough"></a>

## instantiatedIsEqualEnough ⇒ <code>Boolean</code>
**Kind**: global typedef  
**Returns**: <code>Boolean</code> - Whether the numbers are within the tolerance or not.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | A number. |
| b | <code>Number</code> | Another number. |

**Example**  
```js
isEqualEnough(0.15 + 0.15, 0.1 + 0.2);
// → true
```

## License

MIT @ [Flip](https://github.com/flipactual)
