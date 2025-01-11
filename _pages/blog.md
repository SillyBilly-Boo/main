---
title: Blog
layout: page
---

{% section outline %}
# Blog Posts

{% assign reversed = site.posts | reverse %}
<ul>
    {% for post in reversed %}
        <li><a href="{{ post.url }}">{{ post.title }}</a> ★ {{ post.date | date: "%b %d '%y" }}</li>
    {% endfor %}
</ul>
{% endsection %}
