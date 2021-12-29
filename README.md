# version-compare
compare two versions

#### state

refer to https://github.com/juji/cookie-manager and fix some bug

#### Usage

```js
import { versionCompare, VersionIs } from 'version-compare'
versionCompare('1.1', '1') === VersionIs.EqualTo
// false
versionCompare('1.1', '1') === VersionIs.GreaterThan
// true
console.log(['1.1', '2', '1.0'].sort(versionCompare))
// 1.0, 1.1, 2

```
