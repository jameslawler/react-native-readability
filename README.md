# react-native-readability
> React Native compatible readability

[![npm version](https://badge.fury.io/js/react-native-readability.svg)](https://badge.fury.io/js/react-native-readability)
[![Build Status](https://api.travis-ci.org/jameslawler/react-native-readability.png?branch=master)](https://api.travis-ci.org/jameslawler/react-native-readability)

A layer on top of the Mozilla Readability module using react-native compatible modules. This module attempts to first clean the HTML of broken elements and tags before extracting the clean HTML.

## Installation

```sh
npm install react-native-readability --save
```

## Usage example

```js
import readability from 'react-native-readability';

const url = 'http://www.bbc.com/news/business-42942921';

return fetch(url)
  .then((response) => response.text())
  .then((responseData) => readability.cleanHtml(responseData, url))
  .then((cleanHtml) => {
    console.log(cleanHtml.content);
    console.log(cleanHtml.title);
  });
```

## Clean HTML model

```js
{
  byline: '',   // Author (if found)
  content: '',  // Clean HTML
  excerpt: '',  // Short description of HTML
  length: 0,    // Byte length of clean HTML
  title: '',    // Title of web page
}
```

## Development setup

Clone this project from [GitHub](https://github.com/jameslawler/react-native-readability)

```sh
npm install
npm test
```

## Bugs / feature requests

If you find any bugs or have a feature request, please create an issue in [GitHub](https://github.com/jameslawler/react-native-readability).

## Contributing

1. Fork it (<https://github.com/jameslawler/react-native-readability>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

Distributed under the MIT license. See ``LICENSE`` for more information.