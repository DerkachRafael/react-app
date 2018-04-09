![Logo](./logo.png)

# Just TEST 30 seconds of code mini version

> Curated collection of useful JavaScript snippets that you can understand in 20 seconds or less.

- Use <kbd>Ctrl</kbd> + <kbd>F</kbd> or <kbd>command</kbd> + <kbd>F</kbd> to search for a snippet.
- You can import these snippets into your text editor of choice (VSCode, Atom, Sublime) 

#### Package

You can find a package details [npm](https://www.npmjs.com/package/jsmp-infra-useful-snippets-js).

```bash
# With npm
npm install jsmp-infra-useful-snippets-js
```



**Usage examples**

```js

// ES Modules
import {compact} from 'jsmp-infra-useful-snippets-js';
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);
```

To import snippets with Node:

```js

const compact  = require('jsmp-infra-useful-snippets-js').compact;
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);
const  {compact}  = require('jsmp-infra-useful-snippets-js');
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);
```


## Table of Contents

### 📚 Array

<details>
<summary>View contents</summary>

* [`compact`](#compact)
* [`difference`](#difference)
* [`union`](#union)

</details>


### 📜 String

<details>
<summary>View contents</summary>


* [`capitalizeEveryWord`](#capitalizeeveryword)
* [`reverseString`](#reversestring)
* [`truncateString`](#truncatestring)


</details>

 ## 📚 Array



### compact

Removes falsey values from an array.

Use `Array.filter()` to filter out falsey values (`false`, `null`, `0`, `""`, `undefined`, and `NaN`).

```js
const compact = arr => arr.filter(Boolean);
```

<details>
<summary>Examples</summary>

```js
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
```

</details>

<br>[⬆ Back to top](#table-of-contents)



### difference

Returns the difference between two arrays.

Create a `Set` from `b`, then use `Array.filter()` on `a` to only keep values not contained in `b`.

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
```

<details>
<summary>Examples</summary>

```js
difference([1, 2, 3], [1, 2, 4]); // [3]
```

</details>

<br>[⬆ Back to top](#table-of-contents)




### union

Returns every element that exists in any of the two arrays once.

Create a `Set` with all values of `a` and `b` and convert to an array.

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));
```

<details>
<summary>Examples</summary>

```js
union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```

</details>

<br>[⬆ Back to top](#table-of-contents)






<details>
<summary>Examples</summary>

```js
const users = [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }];
orderBy(users, ['name', 'age'], ['asc', 'desc']); // [{name: 'barney', age: 36}, {name: 'fred', age: 48}, {name: 'fred', age: 40}]
orderBy(users, ['name', 'age']); // [{name: 'barney', age: 36}, {name: 'fred', age: 40}, {name: 'fred', age: 48}]
```

</details>

<br>[⬆ Back to top](#table-of-contents)


 ## 📜 String





### capitalizeEveryWord

Capitalizes the first letter of every word in a string.

Use `String.replace()` to match the first character of each word and `String.toUpperCase()` to capitalize it.

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
```

<details>
<summary>Examples</summary>

```js
capitalizeEveryWord('hello world!'); // 'Hello World!'
```

</details>

<br>[⬆ Back to top](#table-of-contents)


### reverseString

Reverses a string.

Use the spread operator (`...`) and `Array.reverse()` to reverse the order of the characters in the string.
Combine characters to get a string using `String.join('')`.

```js
const reverseString = str => [...str].reverse().join('');
```

<details>
<summary>Examples</summary>

```js
reverseString('foobar'); // 'raboof'
```

</details>

<br>[⬆ Back to top](#table-of-contents)





### truncateString

Truncates a string up to a specified length.

Determine if the string's `length` is greater than `num`.
Return the string truncated to the desired length, with `'...'` appended to the end or the original string.

```js
const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
```

<details>
<summary>Examples</summary>

```js
truncateString('boomerang', 7); // 'boom...'
```

</details>

<br>[⬆ Back to top](#table-of-contents)




## Credits

*Icons made by [Smashicons](https://www.flaticon.com/authors/smashicons) from [www.flaticon.com](https://www.flaticon.com/) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/).*

