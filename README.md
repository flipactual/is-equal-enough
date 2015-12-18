# is-practically-equal

Determine whether two numbers are practically equal.

**Parameters:**

| Name | Type | Description |
| --- | --- | ---- |
| a | Number | A number. |
| b | Number | Another number. |
| tolerance | Number | The acceptable tolerance. |

**Returns:**

_Boolean_ Whether the numbers are practically equal or not.

**Example:**

```js
isPracticallyEqual(0.15 + 0.15, 0.1 + 0.2, Number.EPSILON)
// → true
```
