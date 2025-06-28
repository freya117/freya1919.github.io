module Jekyll
  module SmartImageFilter
    def smart_image(input)
      # Process all image tags to make them extension-agnostic
      # Replace standard Markdown image syntax ![alt](/path/to/image.jpg) with our smart-image include
      input.gsub(/!\[(.*?)\]\((.*?)\)/) do |match|
        alt_text = $1
        image_path = $2
        
        # Remove the extension if present
        base_path = image_path.sub(/\.[a-zA-Z0-9]+$/, '')
        
        # Create a smart-image include
        "{% include smart-image.html path=\"#{base_path}\" alt=\"#{alt_text}\" %}"
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::SmartImageFilter) 