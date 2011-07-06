---
title: Bolt Basics
layout: default
section: gettingstarted
---

<h1>Bolt Basics </h1>

<p>
Last time we saw bare bones structure of bolt. Now we will learn about the basic component that a Bolt object has. The source code for this tutorial can be downloaded <a href="examples/bolt_basics.zip" target="_blank">here</a>
</p>
To create a basic application, we create a custom class that extends "view".

{% highlight javascript %}
var ButtonExample = core.createClass({
  extend: View,
})
{% endhighlight %}

<p>This is now a complete view. However, it's not terribly exciting. Let's insert two buttons now to spice things up:</p>

{% highlight javascript %}
var ButtonView  = require('views/button').Button;
var ButtonExample = core.createClass({
  extend: View,
  declare: function(options) {
    return{
      childViews: [
        {   
          view: ButtonView,
          value: 'Example Button',
          onclick: 'doActionOne',
          ref: 'buttonone'
        },  
        {   
          view: ButtonView,
          value: 'Example Button',
          onclick: 'doActionTwo',
          ref: 'buttontwo'
        },  
      ]   
    }   
  },  
})
{% endhighlight %}

<p>
What we've done here is define 'declare' which is a function which takes in one argument and returns a javascript object. This javascript object is essentially the layout for the application. There are a few things you should learn from this example:
</p>
