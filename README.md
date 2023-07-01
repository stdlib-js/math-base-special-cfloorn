<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# floorn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round a complex number to the nearest multiple of `10^n` toward negative infinity.



<section class="usage">

## Usage

```javascript
import cfloorn from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cfloorn@esm/index.mjs';
```

#### cfloorn( \[out,] re, im, n )

Rounds a `complex` number comprised of a **real** component `re` and an **imaginary** component `im` to the nearest multiple of `10^n` toward negative infinity.

```javascript
// Round components to 2 decimal places:
var v = cfloorn( -3.141592653589793, 3.141592653589793, -2 );
// returns [ -3.15, 3.14 ]

// If n = 0, `cfloorn` behaves like `cfloor`:
v = cfloorn( -3.141592653589793, 3.141592653589793, 0 );
// returns [ -4.0, 3.0 ]

// Round components to the nearest thousand:
v = cfloorn( -12368.0, 12368.0, 3 );
// returns [ -13000.0, 12000.0 ]

v = cfloorn( NaN, NaN, 0 );
// returns [ NaN, NaN ]
```

By default, the function returns real and imaginary components as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var out = new Float32Array( 2 );

var v = cfloorn( out, -4.2, 5.5, 0 );
// returns <Float32Array>[ -5.0, 5.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When operating on [floating-point numbers][ieee754] in bases other than `2`, rounding to specified digits can be **inexact**. For example,

    ```javascript
    var x = -0.2 - 0.1;
    // returns -0.30000000000000004

    // Should round components to 0.3:
    var v = cfloorn( x, x, -16 );
    // returns [ -0.3000000000000001, -0.3000000000000001 ]
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import ceil from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@esm/index.mjs';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@esm/index.mjs';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@esm/index.mjs';
import cfloorn from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cfloorn@esm/index.mjs';

var re;
var im;
var z;
var o;
var w;
var n;
var i;

for ( i = 0; i < 100; i++ ) {
    re = ( randu()*100.0 ) - 50.0;
    im = ( randu()*100.0 ) - 50.0;
    z = new Complex128( re, im );

    n = ceil( randu()*5.0 );
    o = cfloorn( real(z), imag(z), -n );
    w = new Complex128( o[ 0 ], o[ 1 ] );

    console.log( 'floorn(%s,%s) = %s', z.toString(), n.toString(), w.toString() );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/cceiln`][@stdlib/math/base/special/cceiln]</span><span class="delimiter">: </span><span class="description">round a complex number to the nearest multiple of 10^n toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/cfloor`][@stdlib/math/base/special/cfloor]</span><span class="delimiter">: </span><span class="description">round a complex number toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/croundn`][@stdlib/math/base/special/croundn]</span><span class="delimiter">: </span><span class="description">round a complex number to the nearest multiple of 10^n.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cfloorn.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cfloorn

[test-image]: https://github.com/stdlib-js/math-base-special-cfloorn/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-cfloorn/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cfloorn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cfloorn?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cfloorn.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cfloorn/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cfloorn/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-cfloorn/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-cfloorn/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-cfloorn/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cfloorn/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/cceiln]: https://github.com/stdlib-js/math-base-special-cceiln/tree/esm

[@stdlib/math/base/special/cfloor]: https://github.com/stdlib-js/math-base-special-cfloor/tree/esm

[@stdlib/math/base/special/croundn]: https://github.com/stdlib-js/math-base-special-croundn/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
