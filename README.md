# d.js

Minuscule DOM manipulation library containing a minimal subset of the [jQuery API](https://api.jquery.com/), written in ES6 via Babel and Browserify. Just **1178 bytes** gzipped, perfect for quick demos or low-bandwidth situations.

## Usage

Just include a script tag at the bottom of the body tag, before any scripts that rely on it. Adds `$` and `d` to global scope.

`<script src="https://cdn.rawgit.com/VictorVation/d.js/master/dist/d.min.js"></script>`

## Features

Implements a subset of the jQuery API, using `$` or `d` as a selector. Currently supported functions:

- `$` or `d` to select DOM elements: `d('.my-class')`
- `map`, `each`, `reduce` for iteration
- `addClass`, `removeClass`, `toggleClass`, `hasClass`
- `on` for adding event listeners
- `attr`, `val`, `text` for getting and setting properties and text values of elements.

