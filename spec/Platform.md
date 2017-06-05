# Platforms
**Version:** `^7.0.0`

A Stone Platform is a unique, keyed description in UTF-8 of a conventional video game console. Each platform has a unique, ASCII-encoded uppercase ID usually in the format `MANUFACTURER_SHORTNAME`, where `SHORTNAME` is the contracted form of the game console's name. 

As of version `7.0.0`, a game *console* is defined as a piece of computing equipment of a **unique architecture** whose primary purpose is to play video games. An architecture consists of the ecosystem surrounding such console, in order for an **architecture** to be distinct, it must have a form of reasonably distinct media, and a reasonably distinct computing architecture.

Under this definition of a console, Stone considers addons such as the Sega 32X (`SEGA_32x`), the Famicom Disk System (`NINTENDO_FDS`), and the Nintendo 64DD (`NINTENDO_64DD`) are distinct *consoles*, but ignores differences between backwards-compatible revisions such as the *Nintendo 3DS* and the *New Nintendo 3DS*, despite there existing games exclusive to the *New Nintendo 3DS*. 

This definition of *Platform* refers only to *gaming Platforms*, thus home computers such as the Apple II, Commodore 64, IBM-PC compatible and various operating systems such as Microsoft Windows and DOS are not included within this definition. As of version `7.0.0`, Stone does not have a specfication for home computers, but we will be working on that in the near future.

Stone does not describe every gaming console out there, many are still not defined within Stone. We are working on adding support for more and more gaming consoles in the future.

## MIME types
Stone describes unique content-types (MIME) for different formats of how game ROMs or disc images are distributed, by mapping common file extensions to discrete media types. This is not solely restricted to the binary data of the game, but layout files such as `.cue` and `.gdi` files, are also included, and are arguably just as important as the binary data itself. 


A single content-type may be shared between multiple extensions (this is particularly the case for many disc-based games), but within a single platform, there must be a one-to-one (injective) mapping of file extension to content-type. This is not the case between two or more platforms, for example, the `.bin` file extension has multiple different content-types depending on the platform. 

Stone does not attempt to prescribe which format should be used for which platform, only striving to describe which file formats are currently in popular use for each platform.

Content-type naming generally follows the following guidelines, with few exceptions:

  * Stone content-types always start with `application/x-romfile-`

  * After the beginning prefix, Stone content-types always indicate the platform with which the mimetype is for, in the form of a short name. For example, `application/x-romfile-nes-...`

  * For cartridge games, a pure, unheadered (besides what is present on the cartridge) binary dump of the cartridge data (and which is sufficient to run the game by itself), has no other suffix than the platform for it's mimetype. This is especially the case if the platform's ROM dumps are distributed in a single format. For example, Sega Genesis (`SEGA_GEN`) has only one content-type, `application/x-romfile-gen`. The SNES (`NINTENDO_SNES`) has content-type `application/x-romfile-snes` for unheadered `.sfc` ROMs, but has additional suffixed content-type for other formats such as Super MagicCard dumps (`.smc`, `application/x-romfile-smc`).

  * Content-types are suffixed with a description of their format if applicable. For example, the iNES file format (`.nes`) for the Nintendo Entertainment System (`NINTENDO_NES`) has content-typ `application/x-romfile-nes-ines`, while the non-suffixed `application/x-romfile-nes` is reserved, as per the previous rules, for the unheadered `.pas` unheadered ROM format.

  * If a content-type refers to a container of a filesystem rather than generally raw binary data, then it will usually end with a some `image` suffix. Often this is `-discimage` for disc based games. Oftentimes with modern (generation 6 and above) consoles, a filesystem is mandated, and this `image` convention will be invoked.

  * It is preferred to use describe the file format in the content-type than just leaving it as the file extension. For example, the `.cci` and `.3ds`, with respect to the Nintendo 3DS (`NINTENDO_3DS`) are file extensions for the same image of the NCSD file system of a 3DS cart, they have the content-type `application/x-romfile-3ds-cartimage`.

  * If the content-type refers to multiple files archived with the ZIP compression algorithm, use the `+zip` content-type suffix as per [RFC6839](https://tools.ietf.org/html/rfc6839). Do not use suffixes for any other format.

### General file format content-type conventions

Certain file formats appear frequently across platforms, especially with disc based games. There are some conventions in place to represent container formats of the same type containing binary and executable data for different platforms.

  * For ELF (executable and linkable) executable files, use the `-elf` suffix.

  * For `.cue` cuesheets, use the `-cuesheet` suffix.

  * For CloneCD formats, use the `-clonecd-image`, `-clonecd-control`, and `-clonecd-subchannel` suffixes for their respective filetypes.

  * `.iso` and `.bin` files will usually refer to the same `-discimage` format, especially if a cuesheet is required. This is because the `.iso` files commonly available are in actualility renamed `.bin` disc image dumps, with a missing cuesheet. This is excepted if the `.iso`, and the disc from which it was ripped from contains **only** a valid ISO9660, Joliet, or UDF, or some other proprietary file system, without having **any** CD or subchannel data on the disc, in which case the `.bin` file extension often is not defined for such systems, or that the `.bin` files are conversely renamed `.iso` files, meaning they would have the same content-type regardless.

  * For Nero formats, use the `-nero` suffix.

  * For Alcohol 120% formats, use the `-alcohol120` suffix.

  * For CDI formats use the `-discjuggler` suffix.

  * If the platform exposes an operating system with a native executable format, such a format should be suffixed with `-executable`. 

  * For compressed file formats not compressed with the ZIP compression algorithm, include the `-compressed` suffix.

Any defined Stone content-type format can have the `+zip` suffix if compressed **by itself** in a ZIP archive. A common example is `.nes` dumps in `.zip` files, which would have the mimetype `application/x-romfile-nes-ines+zip`

## Friendly Name
While the *Platform ID* is meant to be unambiguous and unique, the Friendly Name is simply the full human readable name of the *platform*. For example, *Playstation 2* for the `SONY_PS2`. If the *platform* goes by additional names, prefer the **North American** localised name for the *platform*, and put the other names as metadata.

Generally, follow official terminology and omit the name of the company for the friendly name only if official company materials omit it in documents. Thus, *Wii* is correct for `NINTENDO_WII`, but *Nintendo GameCube* is correct for `NINTENDO_GCN`. Omit any legal symbols such as &trade; and &reg; regardless of official materials.

## Input Count
Platforms should specify the maximum number of acceptable inputs, disregarding peripherals such as multitaps, on their hardware.

## Metadata
*Platforms* can have various **string** metadata to provide additional information. Metadata for platforms must begin with the suffix `platform_`, but have no additional restrictions for naming, and can contain any valid UTF-8 string. 
 
Any additional information is welcome to be added by Pull Request. Metadata is entirely optional, this specification does not guarantee the existence or format of any metadata for any *Platform*. When in doubt, treat all metadata as strings with no special meaning.

There are certain types of metadata that should have specific key names by convention:

### Release Date

**Key:** `platform_releasedate`

This should always be the **earliest** release date of the console, in any region. Regioned release dates can be under the keys `platform_releasedate_na` for North America, `platform_releasedate_eu` for Europe and `platform_releasedate_jp` for the Japanese release dates.

The release date should be in ISO 8601 (YYYY-MM-DD) format, however this specification does not guarantee the format of this metadata. 

### Company
**Key:** `platform_company`

The name of the company that released the *Platform*.

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
Stone also describes common BIOS and firmware files required by many emulators to run. BIOS files are optional and may not exist for every *platform*. They are described by mapping the common name of the BIOS file to known *MD5* hashes of the file, accounting for without describing, different versions of BIOS files. BIOS files that go by different names but are hash-wise the same file, should have their definitions repeated with the different name.

An empty array of hashes means that the file has no known hash, and only a known file name, and thus in regards to Stone, *any file* with that filename could presumably be a valid BIOS file.



