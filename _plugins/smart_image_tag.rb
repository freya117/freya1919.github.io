module Jekyll
  class SmartImageTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      @markup = markup.strip
    end

    def render(context)
      # Process the markup to extract attributes
      attrs = {}
      @markup.scan(/(\w+)=(?:"([^"]+)"|'([^']+)'|([^\s]+))/) do |name, v1, v2, v3|
        attrs[name] = v1 || v2 || v3
      end

      # Get the path, make sure it doesn't already have an extension
      path = attrs['path'] || ''
      path = path.sub(/\.[a-zA-Z0-9]+$/, '') if path.include?('.')

      # Build the smart image include
      include_markup = []
      include_markup << "{% include smart-image.html"
      attrs.each do |name, value|
        include_markup << "#{name}=\"#{value}\""
      end
      include_markup << "%}"

      # Parse and render the include tag
      partial = Liquid::Template.parse(include_markup.join(' '))
      partial.render(context)
    end
  end
end

Liquid::Template.register_tag('smart_image', Jekyll::SmartImageTag) 