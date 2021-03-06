# Versioning
**Version:** `^7.0.0`

Stone uses [semantic versioning](http://semver.org/) where each version is made immutable and unchanging upon release. Some changes to definitions imply breaking changes, as such, the major version number *must* be increased.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://tools.ietf.org/html/rfc2119).

## Non Breaking Changes
The following changes to the documents do not constitute a breaking change, and as such, minor, or patch version number MUST be increased, while the major version number MUST NOT be increased.

* Changing, removing, or adding any existing or non-existing metadata
* Changing the friendly name of a *platform*
* Adding a new content-type to a *platform*
* Changing the friendly name of a *controller*
* Adding a *platform* to a *controller*
* Changing the label of a *controller element*
* Changing the **any schema** such that the previous documents **continue to pass validation**
* Adding a new *platform*
* Adding a new *controller*

## Breaking Changes
The following changes to the documents constitute a breaking change, and as such, the major version number only **MUST** be increased.

* Changing the ID of a *platform*
* Changing the ID of a *controller*
* Changing the type of a *controller element*
* Adding or removing a *controller element*
* Changing or removing an existing content-type from a *platform*
* Changing the maximum amount of inputs of a *platform*
* Changing **any schema** such that the previous documents **require changes to pass validation**
* Changing the specifications such that **any of the above changes are incurred**
* Removing a *controller*
* Removing a *platform*