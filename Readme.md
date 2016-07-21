Stone
=====

[![npm](https://img.shields.io/npm/v/stone-definitions.svg)](https://www.npmjs.com/package/stone-definitions) [![GitHub license](https://img.shields.io/github/license/SnowflakePowered/stone.svg?maxAge=2592000)]()


Stone is a standard on how to refer to past-and-present gaming consoles and their controllers.


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

Feel free to contribute to Stone by filing a Pull Request. Definitions are written in YAML, and are verified against a JSON Schema to ensure that each definition is valid.
