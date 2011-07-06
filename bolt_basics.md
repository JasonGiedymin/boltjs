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
