module Jekyll
    class SectionTag < Liquid::Block
        def initialize(tagname, content, token)
          super
          @content_split = content.split(" ")
          @classes = @content_split.join(" ")
        end

        def render(context)
            content = super
            "<section class='#{@classes}'>#{Kramdown::Document.new(content).to_html}</section>"
        end
    end
end

Liquid::Template.register_tag('section', Jekyll::SectionTag)
