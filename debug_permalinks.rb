#!/usr/bin/env ruby
require 'yaml'

puts "Debugging Project Permalinks\n\n"

Dir.glob('_projects/*.md').each do |file|
  content = File.read(file)
  
  # Extract the YAML front matter
  if content =~ /\A---\s*\n(.*?)\n---\s*\n/m
    front_matter = YAML.load($1)
    
    permalink = front_matter['permalink']
    title = front_matter['title']
    
    puts "File: #{file}"
    puts "Title: #{title}"
    puts "Permalink: #{permalink}"
    puts "---------------"
  else
    puts "No front matter found in #{file}"
    puts "---------------"
  end
end 