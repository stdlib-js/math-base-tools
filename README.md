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

# Tools

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Standard library basic mathematical tools.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-tools
```

</section>

<section class="usage">

## Usage

```javascript
var tools = require( '@stdlib/math-base-tools' );
```

#### tools

Standard library basic mathematical tools.

```javascript
var o = tools;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`continuedFraction( generator[, options ] )`][@stdlib/math/base/tools/continued-fraction]</span><span class="delimiter">: </span><span class="description">continued fraction approximation.</span>
-   <span class="signature">[`evalpoly( c, x )`][@stdlib/math/base/tools/evalpoly]</span><span class="delimiter">: </span><span class="description">evaluate a polynomial.</span>
-   <span class="signature">[`evalrational( P, Q, x )`][@stdlib/math/base/tools/evalrational]</span><span class="delimiter">: </span><span class="description">evaluate a rational function.</span>
-   <span class="signature">[`fibpoly( n, x )`][@stdlib/math/base/tools/fibpoly]</span><span class="delimiter">: </span><span class="description">evaluate a Fibonacci polynomial.</span>
-   <span class="signature">[`hermitepoly( n, x )`][@stdlib/math/base/tools/hermitepoly]</span><span class="delimiter">: </span><span class="description">evaluate a physicist's Hermite polynomial.</span>
-   <span class="signature">[`lucaspoly( n, x )`][@stdlib/math/base/tools/lucaspoly]</span><span class="delimiter">: </span><span class="description">evaluate a Lucas polynomial.</span>
-   <span class="signature">[`normhermitepoly( n, x )`][@stdlib/math/base/tools/normhermitepoly]</span><span class="delimiter">: </span><span class="description">evaluate a normalized Hermite polynomial.</span>
-   <span class="signature">[`sumSeries( generator[, options ] )`][@stdlib/math/base/tools/sum-series]</span><span class="delimiter">: </span><span class="description">compute the sum of an infinite series.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var tools = require( '@stdlib/math-base-tools' );

console.log( objectKeys( tools ) );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-tools.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-tools

[test-image]: https://github.com/stdlib-js/math-base-tools/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-tools/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-tools/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-tools?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-tools
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-tools/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-tools/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math/base/tools/continued-fraction]: https://github.com/stdlib-js/math-base-tools-continued-fraction

[@stdlib/math/base/tools/evalpoly]: https://github.com/stdlib-js/math-base-tools-evalpoly

[@stdlib/math/base/tools/evalrational]: https://github.com/stdlib-js/math-base-tools-evalrational

[@stdlib/math/base/tools/fibpoly]: https://github.com/stdlib-js/math-base-tools-fibpoly

[@stdlib/math/base/tools/hermitepoly]: https://github.com/stdlib-js/math-base-tools-hermitepoly

[@stdlib/math/base/tools/lucaspoly]: https://github.com/stdlib-js/math-base-tools-lucaspoly

[@stdlib/math/base/tools/normhermitepoly]: https://github.com/stdlib-js/math-base-tools-normhermitepoly

[@stdlib/math/base/tools/sum-series]: https://github.com/stdlib-js/math-base-tools-sum-series

<!-- </toc-links> -->

</section>

<!-- /.links -->
