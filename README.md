# CardMove

[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](http://thompsonemerson.mit-license.org/)
[![Build Status](https://travis-ci.org/thompsonemerson/cardmove.svg?branch=master)](https://travis-ci.org/thompsonemerson/cardmove)
[![GitHub version](https://badge.fury.io/gh/thompsonemerson%2Fcardmove.svg)](https://badge.fury.io/gh/thompsonemerson%2Fcardmove)
[![Bower version](https://badge.fury.io/bo/cardmove.svg)](https://badge.fury.io/bo/cardmove)
[![npm version](https://badge.fury.io/js/cardmove.svg)](http://badge.fury.io/js/cardmove)

> CardMove is a plugin developed with JavaScript that allows you to dynamically animate angles and perspectives of cards on mouseover.

## Table of Contents

- [Install](#install)
- [Setup](#setup)
- [How to Use](#how-to-use)
- [Examples](#examples)
- [Contributing](#contributing)
- [History](#history)
- [License](#license)

## Install

NPM:

```bash
$ npm install cardmove --save
```

Bower:

```bash
$ bower install cardmove --save
```

Yarn:

```bash
$ yarn add cardmove
```

If you prefer you can just [download a ZIP](https://github.com/thompsonemerson/cardmove/archive/master.zip) file.


## Setup

First, include CardMove using the script located on the `dist` folder.

```html
<!-- CardMove JS minified -->
<script src="dist/cardmove.min.js"></script>
```

Now we need to prepare our(s) card(s) markup for CardMove, like so:
```html
<!-- Item -->
<div class="card-item">
   <div class="card-content">
     <!-- Content of your item goes here -->
   </div>
</div>

<!-- Starting CardMove -->
<script>
  new CardMove('.card-item');
</script>
```

We're all set! CardMove is already working under the hood, and your card should be animated. Wasn't that easy?


## How to Use

| Property      | Type    | Default  | Description                                      |
| :------------ | :-----: | :-------:| :----------------------------------------------- |
| angle         | number  | 30       | Controls card's animation angle.                 |
| perspective   | number  | 300      | Controls card's perspective.                     |
| horizontal    | boolean | true     | Enables or disables horizontal animation.        |
| vertical      | boolean | true     | Enables or disables vertical animation.          |
| speed         | number  | 500      | Sets an animation speed in milliseconds.         |

```html
<!-- HTML Element -->
<div
  class="card-item"
  data-card-angle="[value]"
  data-card-perspective="[value]"
  data-card-horizontal="[value]"
  data-card-vertical="[value]"
  data-card-speed="[value]">

  <div class="card-content">
  ...
```

```html
<!-- JavaScript -->
<script>
   new CardMove('.card-item', {
       angle: '[value]',
       perspective: '[value]',
       horizontal: '[value]',
       vertical: '[value]',
       speed: '[value]'
   });
</script>

<!-- This is applied globally -->
```

## Examples

> Check out a [demo on codepen](http://codepen.io/thompsonemerson/pen/aBxVma) <br>
Images by [lorempixel](http://lorempixel.com).

![GIFs <3](demo.gif)

### Item 1

> Default

```html
<div class="card-item">
   <div class="card-content">
   ...
```

### Item 2

> Angle value `100`

```html
<div class="card-item" data-card-angle="100">
   <div class="card-content">
   ...
```

### Item 3

> Horizontal value `false`

```html
<div class="card-item" data-card-horizontal="false">
   <div class="card-content">
   ...
```

## Contributing

You can help improve these docs. Open an [issue](https://github.com/thompsonemerson/cardmove/issues/new) or submit a pull request.

1. Navigate to the main page of the repository
1. [Fork it!](https://github.com/thompsonemerson/cardmove#fork-destination-box)
1. Create your feature branch: `git checkout -b my-new-feature`
1. Commit your changes: `git commit -m 'Add some feature'`
1. Push to the branch: `git push origin my-new-feature`
1. Submit a pull request =D

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## History

See [Releases](https://github.com/thompsonemerson/cardmove/releases) for detailed changelog.

## License

[MIT License](http://thompsonemerson.mit-license.org/) © Emerson Thompson
