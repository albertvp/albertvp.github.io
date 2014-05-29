# Backbone Carousel #

![Backbone.JS](http://www.lukedalessandro.com/img/icon_backbonejs.png)

## Overview

Please build a carousel, without using existing plugins.

### Requirements:
* by default display 4 elements. 
* navigation is made with next and previous buttons. 
* Next button should be disabled, if user is at the very end of the carousel. 
* Previous button should be disabled, if user is at the very beginning of carousel. 
* Clicking on next/previous buttons shows next/prev 4 carousel blocks accordingly. 

The source of carousel block is endpoint on server that return following JSON:

`
  [{
    title: "First Block",
    images: [url1, url2, url3]
  },
{
    title: “Second Block",
    images: [url7, url8]
  } 
  ,...]
`

> Display a random image for each block from the set of images.

Technologies:
> Please use Backbone and optionally Marionette

