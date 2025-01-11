# Website

The SillyBilly.Boo website.

## Running locally
First, you'll need [Jekyll](https://jekyllrb.com/) and its requirements installed.
After you have it installed, you need to clone this repo and run these commands in the project folder:

1. `bundle install`
2. `bundle exec jekyll serve`

Then, bam! It should be running at http://localhost:4000. As Jekyll themselves said:
> It's just a jekyll site, afterall! 😉

## Custom Plugins
This site uses a couple of custom plugins.

### Quote
The tag `quote` creates blockquotes out of quotes. The syntax is as follows:
```ruby
{% quote Quote|Person|Source %}
```

Here's an example from the home page of the site:
```ruby
{% quote April Fools, you little sausage! [laughs]|Squidward Tentacles|SpongeBob SquarePants %}
```

### Section
The block `section` is used to enclose markdown in `<section>` tags. You can specify
classes for the section when you begin the block.
The syntax is as follows:
```ruby
{% section className %}
Inner text.
{% endsection %}
```

Here's an example from the about page of the site:
```ruby
{% section outline center %}
*SillyBilly.Boo* is a project meant to make other little projects.
Its purpose is to create and inspire others to create.
{% endsection %}
```
