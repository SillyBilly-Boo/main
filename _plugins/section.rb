module Jekyll
    class SectionTag < Liquid::Block
        def render(context)
            content = super
            "<section>#{Kramdown::Document.new(content).to_html}</section>"
        end
    end
    class SectionOutlineTag < Liquid::Block
        def render(context)
            content = super
            "<section class='outline'>#{Kramdown::Document.new(content).to_html}</section>"
        end
    end
end

Liquid::Template.register_tag('section', Jekyll::SectionTag)
Liquid::Template.register_tag('section_outline', Jekyll::SectionOutlineTag)
