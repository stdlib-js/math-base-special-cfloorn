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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# cfloorn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round each component of a double-precision complex floating-point number to the nearest multiple of `10^n` toward negative infinity.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-cfloorn
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var cfloorn = require( '@stdlib/math-base-special-cfloorn' );
```

#### cfloorn( z, n )

Rounds each component of a double-precision complex floating-point number to the nearest multiple of `10^n` toward negative infinity.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

// Round components to 2 decimal places:
var v = cfloorn( new Complex128( -3.141592653589793, 3.141592653589793 ), -2 );
// returns <Complex128>

var re = real( v );
// returns -3.15

var im = imag( v );
// returns 3.14

// If n = 0, `cfloorn` behaves like `cfloor`:
v = cfloorn( new Complex128( -3.141592653589793, 3.141592653589793 ), 0 );
// returns <Complex128>

re = real( v );
// returns -4.0

im = imag( v );
// returns 3.0

// Round components to the nearest thousand:
v = cfloorn( new Complex128( -12368.0, 12368.0 ), 3 );
// returns <Complex128>

re = real( v );
// returns -13000.0

im = imag( v );
// returns 12000.0

v = cfloorn( new Complex128( NaN, NaN ), 0 );
// returns <Complex128>

re = real( v );
// returns NaN

im = imag( v );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When operating on [floating-point numbers][ieee754] in bases other than `2`, rounding to specified digits can be **inexact**. For example,

    ```javascript
    var Complex128 = require( '@stdlib/complex-float64-ctor' );
    var real = require( '@stdlib/complex-float64-real' );
    var imag = require( '@stdlib/complex-float64-imag' );

    var x = -0.2 - 0.1;
    // returns -0.30000000000000004

    // Should round components to 0.3:
    var v = cfloorn( new Complex128( x, x ), -16 );
    // returns <Complex128>

    var re = real( v );
    // returns -0.3000000000000001

    var im = imag( v );
    // returns -0.3000000000000001
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var uniform = require( '@stdlib/random-base-uniform' );
var randint = require( '@stdlib/random-base-discrete-uniform' );
var cfloorn = require( '@stdlib/math-base-special-cfloorn' );

var z;
var w;
var n;
var i;

for ( i = 0; i < 100; i++ ) {
    z = new Complex128( uniform( -50.0, 50.0 ), uniform( -50.0, 50.0 ) );

    n = randint( -5.0, 0.0 );
    w = cfloorn( z, n );

    console.log( 'floorn(%s,%s) = %s', z.toString(), n.toString(), w.toString() );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/cfloorn.h"
```

#### stdlib_base_cfloorn( z, n )

Rounds each component of a double-precision complex floating-point number to the nearest multiple of `10^n` toward negative infinity.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"

stdlib_complex128_t z = stdlib_complex128( -3.141592653589793, 3.141592653589793 );
stdlib_complex128_t out = stdlib_base_cfloorn( z, -2 );

double re = stdlib_complex128_real( out );
// returns -3.15

double im = stdlib_complex128_imag( out );
// returns 3.14
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex128_t` input value.
-   **n**: `[in] int32_t` integer power of 10.

```c
stdlib_complex128_t stdlib_base_cfloorn( const stdlib_complex128_t z, const int32_t n );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/cfloorn.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/reim.h"
#include <stdio.h>

int main() {
    const stdlib_complex128_t x[] = {
        stdlib_complex128( 3.14, 1.5 ),
        stdlib_complex128( -3.14, -1.5 ),
        stdlib_complex128( 0.0, 0.0 ),
        stdlib_complex128( 0.0/0.0, 0.0/0.0 )
    };

    stdlib_complex128_t v;
    stdlib_complex128_t y;
    double re1;
    double im1;
    double re2;
    double im2;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        y = stdlib_base_cfloorn( v, -2 );
        stdlib_complex128_reim( v, &re1, &im1 );
        stdlib_complex128_reim( y, &re2, &im2 );
        printf( "cfloorn(%lf + %lfi, -2) = %lf + %lfi\n", re1, im1, re2, im2 );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/cceiln`][@stdlib/math/base/special/cceiln]</span><span class="delimiter">: </span><span class="description">round each component of a double-precision complex floating-point number to the nearest multiple of 10^n toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/cfloor`][@stdlib/math/base/special/cfloor]</span><span class="delimiter">: </span><span class="description">round a double-precision complex floating-point number toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/croundn`][@stdlib/math/base/special/croundn]</span><span class="delimiter">: </span><span class="description">round each component of a double-precision complex floating-point number to the nearest multiple of 10^n.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

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
[deno-readme]: https://github.com/stdlib-js/math-base-special-cfloorn/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-cfloorn/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-cfloorn/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-cfloorn/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-cfloorn/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-cfloorn/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cfloorn/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/cceiln]: https://github.com/stdlib-js/math-base-special-cceiln

[@stdlib/math/base/special/cfloor]: https://github.com/stdlib-js/math-base-special-cfloor

[@stdlib/math/base/special/croundn]: https://github.com/stdlib-js/math-base-special-croundn

<!-- </related-links> -->

</section>

<!-- /.links -->
