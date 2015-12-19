# is-equal-enough

Determine whether two numbers are within a provided tolerance of each other.

## Example:

```js
const isEqualEnough = require('is-equal-enough')(Number.EPSILON)
isEqualEnough(0.15 + 0.15, 0.1 + 0.2)
// → true
```
