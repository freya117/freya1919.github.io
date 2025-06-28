---
layout: single
title: "Image Test"
permalink: /imagetest/
---

## Testing Image Display

Here's the headshot image using the old method:

<img src="/assets/images/freya_2024.JPG" alt="Freya Tan" width="300">

And using Markdown syntax:

![Freya Tan](/assets/images/freya_2024.JPG)

## Using Smart Image (Extension Agnostic)

{% include smart-image.html path="/assets/images/freya_2024" alt="Freya Tan" width="300" %}

## Using Smart Figure

{% include smart-figure image_path="/assets/images/freya_2024" alt="Freya Tan" width="300" caption="Freya's profile picture" %}

## Testing With Different Extensions

These all point to the same base filename, but with different extensions:

{% include smart-image.html path="/assets/images/profile" alt="Profile" width="300" %}

## Using Without Extensions in HTML

<img src="/assets/images/freya_2024" data-image-base="/assets/images/freya_2024" alt="Freya Tan (extension agnostic)" width="300" onerror="smartImageFallback(this)">

## Using Without Extensions in Markdown (will fall back to first available extension)

![Freya Tan (extension agnostic)](/assets/images/freya_2024)

## Direct Path Test

<img src="assets/images/freya_2024.JPG" alt="Freya Tan (relative path)" width="300">

## With baseurl

<img src="{{ site.baseurl }}/assets/images/freya_2024.JPG" alt="Freya Tan (with baseurl)" width="300">

## Testing an alternative format

<img src="/assets/images/freya_2024.jpg" alt="Freya Tan (lowercase jpg)" width="300">

## Testing new profile.jpg

<img src="/assets/images/profile.jpg" alt="Freya Tan (profile.jpg)" width="300">

## Using relative path for profile.jpg

<img src="assets/images/profile.jpg" alt="Freya Tan (relative profile.jpg)" width="300"> 