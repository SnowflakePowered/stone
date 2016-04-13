Stone
=====

[![npm](https://img.shields.io/npm/v/stone-definitions.svg)](https://www.npmjs.com/package/stone-definitions) [![GitHub license](https://img.shields.io/github/license/SnowflakePowered/stone.svg?maxAge=2592000)]()


Stone is a standard on how to refer to past-and-present gaming consoles and their controllers.

Stone currently specifies:

 * All Nintendo Home and Handheld consoles (excepting Game And Watch and Color TV Game)
 * All Sega Home and Handheld consoles (excepting Sega Pico and SG-1000)
 * All Sony Home and Handheld consoles (excepting Pocketstation)
 * All Atari Home and Handheld consoles
 * All SNK Home and Handheld consoles (excepting Neo Geo X*)
 * Wonderswan and Wonderswan color
 * TurboGrafx-16
 
 \* Neo Geo X is not a standalone platform according to the Stone specification.

Work is underway to support all consoles listed in the [Stone specification](https://github.com/SnowflakePowered/stone-spec), 
and more.

Usage
-----

Stone comes in the form of a compiled and minified json file. You can simply parse this file to get the latest stone definitions.

### C Sharp

```c#
var stone = JsonConvert.DeserializeObject("stone.dist.json");
```

### Node.js

```js
var stone = require('stone-definitions')
```

Contributing
------------

Feel free to contribute to Stone by filing a Pull Request. Definitions are written in YAML, and are verified against a JSON Schema to ensure that each definition is valid.
