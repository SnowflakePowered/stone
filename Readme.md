Stone
=====

Stone is a standard on how to refer to past-and-present gaming consoles and their controllers.

Currently Stone specifies all Nintendo, Sega, and Sony Playstation home consoles, and their controllers, with the exception of the PS Vita and Virtual-Boy. The Wii Classic Controller as well as the Wii Remote with Classic Controller attachment is also yet to be specified.

Work is underway to support more consoles such as classic Atari consoles, as well as handhelds such as the Bandai Wonderswan.

Usage
-----

Stone comes in the form of a compiled and minified json file. You can simply parse this file to get the latest stone definitions.

### C#

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
