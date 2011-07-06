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

<ul>
<li>childViews - an array of javascript objects. these objects are the "children" of this view. </li>
<li>view - this is the property which defines which View this child will use. Any predefined view will work fine, but you will need to import it (as I have up top) before using it</li>
<li>ref - this is basically an id that our ButtonExample class can use to identify a particular child. If you want to address any of the children somewhere else other than here, you should assign it the ref property a value.</li>
<li>onclick - This property refers to a method (by name) which to call when this button is clicked. We will now need to write these methods (doActionOne and doActionTwo) in the parent. </li>
<li>value - this is the property used by ButtonView to determine what text to place in the button.</li>
</ul>

<p>You can create a constructor for your view by defining the "construct" property as a function that takes in one argument.</p>
{% highlight javascript %}
  construct: function(options) {
    this.firstButtonValue = "First Button";
    View.call(this, options);
  },  
{% endhighlight %}
