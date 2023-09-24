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

# Tools

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base math tools.



<section class="usage">

## Usage

```javascript
import tools from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools@v0.1.0-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { continuedFraction, evalpoly, evalrational, fibpoly, hermitepoly, lucaspoly, normhermitepoly, sumSeries } from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools@v0.1.0-esm/index.mjs';
```

#### tools

Namespace containing "base" math tools.

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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import tools from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools@v0.1.0-esm/index.mjs';

console.log( objectKeys( tools ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-tools.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-tools

[test-image]: https://github.com/stdlib-js/math-base-tools/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/math-base-tools/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-tools/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-tools?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-tools.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-tools/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-tools/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-tools/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-tools/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-tools/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-tools/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math/base/tools/continued-fraction]: https://github.com/stdlib-js/math-base-tools-continued-fraction/tree/esm

[@stdlib/math/base/tools/evalpoly]: https://github.com/stdlib-js/math-base-tools-evalpoly/tree/esm

[@stdlib/math/base/tools/evalrational]: https://github.com/stdlib-js/math-base-tools-evalrational/tree/esm

[@stdlib/math/base/tools/fibpoly]: https://github.com/stdlib-js/math-base-tools-fibpoly/tree/esm

[@stdlib/math/base/tools/hermitepoly]: https://github.com/stdlib-js/math-base-tools-hermitepoly/tree/esm

[@stdlib/math/base/tools/lucaspoly]: https://github.com/stdlib-js/math-base-tools-lucaspoly/tree/esm

[@stdlib/math/base/tools/normhermitepoly]: https://github.com/stdlib-js/math-base-tools-normhermitepoly/tree/esm

[@stdlib/math/base/tools/sum-series]: https://github.com/stdlib-js/math-base-tools-sum-series/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
