#!/usr/bin/env ruby

puts "Finding project files with gallery includes at the end...\n\n"

Dir.glob('_projects/*.md').each do |file|
  content = File.read(file)
  
  # Check if file ends with gallery include
  if content.strip.end_with?('{% include gallery caption="Newark Heat Resilience Planning" %}') ||
     content.strip.end_with?('{% include gallery %}') ||
     content =~ /{% include gallery caption=".+?" %}[ \t]*\z/
    
    puts "File: #{file}"
    puts "Has gallery include at end"
    puts "---------------"
  end
end 