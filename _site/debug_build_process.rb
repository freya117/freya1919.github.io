#!/usr/bin/env ruby
require 'yaml'

puts "Debugging Jekyll Build Process\n\n"

Dir.glob('_projects/*.md').each do |file|
  content = File.read(file)
  
  # Extract the YAML front matter
  if content =~ /\A---\s*\n(.*?)\n---\s*\n/m
    front_matter = YAML.load($1)
    
    permalink = front_matter['permalink']
    title = front_matter['title']
    
    # Strip leading slash and remove trailing slash to get directory
    target_dir = permalink.sub(/^\//,'').sub(/\/$/,'')
    
    # Check if directory exists
    site_dir = "_site/#{target_dir}"
    index_file = "#{site_dir}/index.html"
    
    dir_exists = Dir.exist?(site_dir)
    file_exists = File.exist?(index_file)
    
    puts "File: #{file}"
    puts "Title: #{title}"
    puts "Permalink: #{permalink}"
    puts "Target site dir: #{site_dir}"
    puts "Directory exists: #{dir_exists}"
    puts "Index file exists: #{file_exists}"
    puts "---------------"
  else
    puts "No front matter found in #{file}"
    puts "---------------"
  end
end 