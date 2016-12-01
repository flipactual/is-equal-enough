# is-equal-enough

[![flipactual](https://img.shields.io/badge/😋-flipactual-218AC7.svg?style=flat-square)](https://www.flipactual.com/)
[![Travis](https://img.shields.io/travis/flipactual/is-equal-enough.svg?style=flat-square)](https://travis-ci.org/flipactual/is-equal-enough/)
[![Codecov](https://img.shields.io/codecov/c/github/flipactual/is-equal-enough.svg?style=flat-square)](https://codecov.io/gh/flipactual/is-equal-enough/)
[![Node](https://img.shields.io/node/v/is-equal-enough.svg?style=flat-square)](http://npmjs.com/package/is-equal-enough)
[![NPM](https://img.shields.io/npm/v/is-equal-enough.svg?style=flat-square)](http://npmjs.com/package/is-equal-enough)

Determine whether values are within a tolerance of each other

<a name="isEqualEnough"></a>

## isEqualEnough(a, b, [tolerance]) ⇒ <code>boolean</code>
Determine whether two numbers are within a provided tolerance of each other.

**Kind**: global function  
**Returns**: <code>boolean</code> - Whether the numbers are within the tolerance or not.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | <code>number</code> |  | A number |
| b | <code>number</code> |  | Another number |
| [tolerance] | <code>number</code> | <code>Number.EPSILON</code> | The acceptable tolerance. |

**Example**  
```js
isEqualEnough(0.15 + 0.15, 0.1 + 0.2);
// → true
```

## Scripts

### `test` – run the tests

```sh
npm run test
```

### `coverage` – generate and view code coverage as HTML

```sh
npm run coverage
```

### `lint` – lint the codebase

```sh
npm run lint
```

### `readme` – generate the README

```sh
npm run readme
```

### `compile` – compile the code

```sh
npm run compile
```

## License

MIT @ [Flip](https://github.com/flipactual)
