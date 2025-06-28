---
layout: single
title: "Smart Image System"
permalink: /smart-image-docs/
---

# Smart Image System

The Smart Image System allows you to display images without worrying about the file extension. Whether your image is a JPG, PNG, GIF, or any other format, as long as the base filename is correct, the image will display properly.

## Using Smart Image Include

The simplest way to use the Smart Image System is with the `smart-image.html` include:

```liquid
{% raw %}{% include smart-image.html path="/assets/images/filename" alt="Image description" width="300" %}{% endraw %}
```

Note that you should **not** include the file extension in the `path` parameter.

## Using Smart Figure Include

If you want to include a caption with your image, use the `smart-figure` include:

```liquid
{% raw %}{% include smart-figure image_path="/assets/images/filename" alt="Image description" width="300" caption="Image caption text" %}{% endraw %}
```

## Using the Smart Image Tag

You can also use the custom `smart_image` tag:

```liquid
{% raw %}{% smart_image path="/assets/images/filename" alt="Image description" width="300" %}{% endraw %}
```

## Using in HTML

If you prefer to use HTML directly, you can use the `data-image-base` attribute:

```html
<img src="/assets/images/filename" data-image-base="/assets/images/filename" alt="Image description" width="300" onerror="smartImageFallback(this)">
```

## Using in Markdown

For Markdown, you can simply omit the extension:

```markdown
![Image description](/assets/images/filename)
```

The system will automatically try different file extensions until it finds one that works.

## How It Works

The Smart Image System works by:

1. Trying to load the image with the specified base path and an initial extension (typically .jpg)
2. If that fails, it tries other common extensions like .png, .gif, etc.
3. Once a valid image is found, it displays that image

This approach makes your image references more robust, as they'll work regardless of the specific file format used. 