module Jekyll
  class QuoteTag < Liquid::Tag

    def initialize(tagname, content, token)
      super
      @content_split = content.split("|")
    end

    def render(context)
      "<figure>" \
          "<blockquote><p>#{@content_split[0]}</p></blockquote>" \
          "<figcaption>#{@content_split[1]}, <cite>#{@content_split[2]}</cite></figcaption>" \
      "</figure>"
    end
  end
end

Liquid::Template.register_tag('quote', Jekyll::QuoteTag)
