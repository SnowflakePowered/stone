# Platforms
**Version:** `^10.0.0`

A Stone Platform is a unique, keyed description in UTF-8 of a conventional video game console. Each platform is given a unique, ASCII-encoded uppercase ID usually in the format `LICENSOR_SHORTNAME`, where `SHORTNAME` is be the contracted form of the game console's name. 

As of version `10.0.0`, a platform is defined as a marketed computing device of a unique architecture whose primary purpose is to play video games. An architecture consists of the console hardware, peripherals, and media. Unique means that the architecture contains at least one form of media that requires the described hardware, or reproductions thereof (including emulators, compositions, and hardware descriptions), for expected execution.

This definition of *platform* refers only to *gaming Platforms*, thus home computers such as the Apple II, Commodore 64, IBM-PC compatible and various operating systems such as Microsoft Windows and DOS are not included within this definition. As of version `7.0.0`, Stone does not have a specfication for home computers, but it is under consideration.

Stone does not describe every gaming console out there, many are still not defined within Stone. Support for more and more gaming consoles will be added in the future.

## MIME types
Stone describes unique content-types (MIME) for different formats of how game ROMs or disc images are distributed, by mapping common file extensions to discrete media types. This is not solely restricted to the binary data of the game, but layout files such as `.cue` and `.gdi` files, are also included, and are arguably just as important as the binary data itself. 

A single content-type can be shared between multiple extensions (this is particularly the case for many disc-based games), but within a single platform, there must be a one-to-one (injective) mapping of file extension to content-type. This is not the case between two or more platforms, for example, the `.bin` file extension has multiple different content-types depending on the platform. 

Stone does not attempt to prescribe which format should be used for which platform, only striving to describe which file formats are currently in popular use for each platform.

Content-type naming follows the following guidelines:

  * The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://tools.ietf.org/html/rfc2119).

  * Stone content-types MUST start with `application/vnd.stone-romfile.`

  * After the beginning prefix, Stone content-types SHOULD be namespaced with the platform vendor, then MUST indicate the platform with which the mimetype is for, in the form of a short name. For example, `application/vnd.stone-romfile.nintendo.nes-...`

  * For cartridge games, a pure, unheadered (besides what is present on the cartridge) binary dump of the cartridge data (and which is sufficient to run the game by itself), SHOULD have no other suffix than the platform for it's mimetype. This is especially the case if the platform's ROM dumps are distributed in a single format. For example, Sega Genesis (`SEGA_GEN`) has only one content-type, `application/vnd.stone-romfile.sega.gen`. The SNES (`NINTENDO_SNES`) has content-type `application/vnd.stone-romfile.nintendo.snes` for unheadered `.sfc` ROMs, but has additional suffixed content-type for other formats such as Super MagicCard dumps (`.smc`, `application/vnd.stone-romfile.nintendo.snes-magiccard`).

  * Content-types SHOULD be suffixed with a description of their format if applicable. For example, the iNES file format (`.nes`) for the Nintendo Entertainment System (`NINTENDO_NES`) has content-type `application/vnd.stone-romfile.nintendo.nes-ines`, while the non-suffixed `application/vnd.stone-romfile.nintendo.nes` is reserved, as per the previous rules, for the unheadered `.pas` unheadered ROM format.

  * If a content-type refers to a container of a filesystem rather than generally raw binary data, then it SHOULD end with a some `image` suffix. Often this is `-discimage` for disc based games. Oftentimes with modern (generation 6 and above) consoles, a filesystem is mandated, and this `image` convention will be invoked. 
  
  * It is RECOMMENDED to use describe the file format in the content-type than just leaving it as the file extension. For example, the `.cci` and `.3ds`, with respect to the Nintendo 3DS (`NINTENDO_3DS`) are file extensions for the same image of the NCSD file system of a 3DS cart, they have the content-type `application/vnd.stone-romfile.nintendo.3ds-cartimage`.

  * If the content-type refers to multiple files archived with the ZIP compression algorithm, the `+zip` content-type suffix as per [RFC6839](https://tools.ietf.org/html/rfc6839) SHOULD be used. Structured Syntax Suffixes for any other format SHOULD NOT be used in Stone.

  * The special content-type `BIOS` MUST be of the format `application/vnd.stone-romfile.manufacturer.shortname-sys`, representing BIOS files, refers to any file that matches an MD5 listed in the platform's BIOS files. Any platform that describes at least one BIOS file MUST define the `BIOS` content-type.

  * The special content-type `RSRC` MUST be defined and MUST be of the format `application/vnd.stone-romfile.manufacturer.shortname-resource`. This content-type is an opaque content-type  for resource and miscellaneous files relating to the platform, and acts similar to `application/octet-stream` with the additional restriction that the file is necessary for proper execution of the media on the platform. It is RECOMMENDED that this content-type be avoided, and more specific content-types be defined.
  
As of Stone 7.0.0, the `application/x-romfile-` prefix is no longer in use. As per [RFC6838&sect;3.2](https://tools.ietf.org/html/rfc6838#section-3.2), Stone will now use the vendor media-type tree under `vnd.stone-romfile`.

### General file format content-type conventions

Certain file formats appear frequently across platforms, especially with disc based games. There are some conventions in place to represent container formats of the same type containing binary and executable data for different platforms. 

  * For ELF (executable and linkable) executable files, the `-elf` suffix SHOULD be used.

  * For `.cue` cuesheets, the `-cuesheet` suffix MUST be used.

  * For CloneCD formats, the `-clonecd-image`, `-clonecd-control`, and `-clonecd-subchannel` suffixes for their respective filetypes MUST be used.

  * For disc-based platforms, especially in BIN/CUE platforms (CD-ROM), `.bin` **may not necessarily contain a filesystem**. In this case, if the `.bin` file represents a single track on a CD-ROM, the suffix `-disctrack` SHOULD be used. If a `.bin` definition defines `-disctrack`, `.iso` MAY also define `-disctrack`, but MUST NOT define anything other than `-disctrack`.
  
  * For disc-based platforms, especially in DVD-ROM or Blu-Ray platforms, if `.iso` and `.bin` files exclusively contain a **single track** that contains a **filesystem**, the `-discimage` suffix SHOULD be used.

  * For Nero formats, the `-nero` suffix MUST be used.

  * For Alcohol 120% formats, the `-alcohol120` suffix MUST be used.

  * For CDI formats, the `-discjuggler` suffix MUST be used.

  * For MAME CHD (Compressed Hunks of Data) formats, the `-chd-compressed` suffix MUST be used. 

  * If the platform exposes an operating system with a native executable format, such a format SHOULD be suffixed with `-executable`. 

  * If the format is the platform-sponsored importable/unpackable archive format, the suffix `-importable` SHOULD be used. 
  
  * For compressed file formats not compressed with the ZIP compression algorithm, the `-compressed` suffix SHOULD be used.

Any defined Stone content-type format can have the `+zip` suffix if compressed **by itself** in a ZIP archive. A common example is `.nes` dumps in `.zip` files, which would have the mimetype `application/vnd.stone-romfile.nintendo.nes-ines+zip`

## Friendly Name
While the *Platform ID* is meant to be unambiguous and unique, the Friendly Name is simply the full human readable name of the *platform*. For example, *Playstation 2* for the `SONY_PS2`. If the *platform* goes by additional names, prefer the **North American** localised name for the *platform*, and put the other names as metadata.

Generally, follow official terminology and omit the name of the company for the friendly name only if official company materials omit it in documents. Thus, *Wii* is correct for `NINTENDO_WII`, but *Nintendo GameCube* is correct for `NINTENDO_GCN`. Omit any legal symbols such as &trade; and &reg; regardless of official materials.

## Input Count
Platforms should specify the maximum number of acceptable inputs, disregarding peripherals such as multitaps, on their hardware.

## Metadata
*Platforms* can have various **string** metadata to provide additional information. Metadata for platforms must begin with the prefix `platform_`, but have no additional restrictions for naming, and can contain any valid UTF-8 string. 

Any additional information is welcome to be added by Pull Request. Metadata is entirely **optional**, this specification **does not guarantee the existence** or format of any metadata for any *Platform*. When in doubt, treat all metadata as strings with no special meaning.

There are certain types of metadata that should have specific key names by convention:

### Release Date

**Key:** `platform_releasedate`

This should always be the **earliest** release date of the console, in any region. Regioned release dates can be under the keys `platform_releasedate_na` for North America, `platform_releasedate_eu` for Europe and `platform_releasedate_jp` for the Japanese release dates.

The release date should be in ISO 8601 (YYYY-MM-DD) format, however this specification does not guarantee the format of this metadata. 

If only a year and a month is known, assume the date of release to be the first of that month (YYYY-MM-01).
### Licensor
**Key:** `platform_licensor`

The name of the company that is the licensor of the *platform*.

### Manufacturer
**Key:** `platform_manufacturer`

The name of the company that manufactures the *platform*.

### Short Name
**Key:** `platform_shortname`

A shorthand name to refer to this *platform* by. Usually part of the *platform* ID.

### Type
**Key:** `platform_type`

The type of the *platform*, usually `Home`, `Handheld`, or `Addon`.

### Japanese Friendly Name
**Key:** `platform_name_jp`

The **translated English** localised Japanese friendly name for the *platform*. For example, *Family Computer* for the *Nintendo Entertainment System*.

### Japanese Kana Friendly Name 
**Key:** `platform_name_jp_kana`

The Japanese friendly name for the *platform* as it appears in Japanese script. For example, *ファミリーコンピュータ* for the *Nintendo Entertainment System*.

### European Friendly Name
**Key:** `platform_name_eu`

The localised European friendly name for the *platform*. For example, *Mega Drive* for the *Sega Genesis*

### In Development Emulator
**Key:** `platform_emulator_dev`

For *platforms* that do not have a mature emulation scene, the name of the emulator currently in development that may or may not provide a playable experience on that *platform*.

## BIOS Files
Stone also describes common BIOS and firmware files required by many emulators to run. BIOS files are optional and may not exist for every *platform*. They are described by mapping the common name of the BIOS file to known lowercase *MD5* hashes of the file, accounting for without describing, different versions of BIOS files. BIOS files that go by different names but are hash-wise the same file, should have their definitions repeated with the different name.

An empty array of hashes means that the file has no known hash, and only a known file name, and thus in regards to Stone, *any file* with that filename could presumably be a valid BIOS file.



