[image showing semantically styled vs native styles]

> ["Semantic HTML"](https://internetingishard.com/html-and-css/semantic-html/) refers to the idea that all your HTML markup should convey the undelying meaning of your content-not its appearance. - [internetingishard.com](https://internetingishard.com)

# semantic.css
Semantically awesome styles for your next web project

## Features:
- Reset: A great reset for html element styles.
- Sane base styles: A great starting place for to style any HTML document

## Motivation
While working on [`pageantry`](https://github.com/pauldariye/pageantry), I realized I needed default styles that enabled all web pages generated from markdown files or just plain rendered html pages to look elegant and to make for a pleasing reading experience.

## Installation

### NPM

```
yarn add semantic.css # or npm install --save semantic.css
```

### CDN

## Usage

If you're using a bundler like webpack, parcel, rollup, etc just import in your js file
```
import 'semantic.css'
...
```
Otherwise, grab it from the CDN and include it directly in your html file

```
...
<head>
...
<link rel="stylesheet" type="text/css" href="cdnlink" />
...
</head>
...
```

## Semantic Element (HTML) Styles
Semantic elements are elements that convey meaning. In turn, the meaning derived from these elements inform the styles applied to them.

- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`
- `<article>`
- `<aside>`
- `<details>`
- `<figcaption>`
- `<figure>`
- `<footer>`
- `<header>`
- `<main>`
- `<mark>`
- `<nav>`
- `<section>`
- `<summary>`
- `<time>`
- ETC

## Contributing

```
git clone git@github.com:pauldariye/semantic.css.git
cd semantic.css && yarn # or npm install
yarn dev # or npm run dev
```

## Acknowledgement
- [medium.css](https://github.com/lucagez/medium.css)
- [normalize.css](https://github.com/necolas/normalize.css/)
- [skeleton.css](http://getskeleton.com)
- [bitsofco.de](https://bitsofco.de/my-css-reset-base/)

## License

MIT


