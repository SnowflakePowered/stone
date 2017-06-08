![Stone](https://raw.githubusercontent.com/SnowflakePowered/stone/master/branding/logo.png)
=====

[![npm](https://img.shields.io/npm/v/stone-definitions.svg)](https://www.npmjs.com/package/stone-definitions) [![Travis](https://img.shields.io/travis/SnowflakePowered/stone.svg)](https://travis-ci.org/SnowflakePowered/stone) [![GitHub license](https://img.shields.io/github/license/SnowflakePowered/stone.svg?maxAge=2592000)]()


Stone is a standard on how to refer to past-and-present gaming consoles and their controllers.

Rationale
---------
Stone gives each unique video game console and their common controller layouts a unique ID. This makes references to a certain console or controller unambiguous. Stone serves as a source of truth for video game console metadata, their consoles, and the formats with which their games are distributed in. It provides a semantic definition for the button layouts for various controllers, as well as unambiguous and unique content-types for various formats that games are distributed and archived in.

Usage
-----

Stone comes in the form of a compiled and minified json file. You can simply parse this file to get the latest stone definitions.

### *C#*

```c#
var stone = JsonConvert.DeserializeObject("stone.dist.json");
```

### *Node.js*

```js
var stone = require('stone-definitions')
```

Contributing
------------

Feel free to contribute to Stone by filing a Pull Request. Definitions are written in YAML, and are verified against a JSON Schema to ensure that each definition is valid. Stone is licensed under the MIT License.
