#!/usr/bin/env ruby

puts "Removing gallery includes from project files...\n\n"

Dir.glob('_projects/*.md').each do |file|
  content = File.read(file)
  original_content = content.dup
  
  # Remove the gallery include line anywhere in the file
  if content.include?('{% include gallery')
    # Remove the include line
    content = content.gsub(/\n*{% include gallery.*?%}\n*/, "\n\n")
    
    # Remove extra blank lines
    content = content.gsub(/\n{3,}/, "\n\n")
    
    # Add a newline at the end if needed
    content += "\n" unless content.end_with?("\n")
    
    # Write the changes back to the file
    File.write(file, content)
    puts "Removed gallery include from: #{file}"
  end
end

puts "\nDone!" 