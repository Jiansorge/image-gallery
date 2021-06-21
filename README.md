# Redfin Coding Screen - Software Engineering - Front End

## Challenge

A web app that retrieves the data from provided photos.

Display this list of photos to the user based on the following requirements:

- show photos in a grid view on initial load
- support a full-screen mode
    - when the user clicks on an image, it will show the entire image fullscreen
    - when the user clicks on a 'close' button or the background, it will close the fullscreen image and return to the grid
- work in Chrome; we will not be evaluating other browsers for compatibility
- support smartphone/tablet (<800px wide) and desktop viewports
- query an API for a set of photos
    - sample data is provided in the attached photos.json, but you must access it via an http request, as if it was an API endpoint
- use only vanilla JavaScript; we won't accept solutions that use frameworks like React, Vue, jQuery, etc.
    - ES6 and any required polyfills are perfectly acceptable, but not required
The final result should be displayed to the user in an easy-to-read list.

## Instructions

1. Start python simpleHTTPserver script using enabled CORS
    1. 'python simple-cors-http-server.py 8080'
1. Type 'localhost:8080' or open 'index.html' in a web browser

## About
  
- I used img 'srcset' attribute to provide a responsive rendering of images based on image width. This method is performance optimized for responsive images.
- Media breakpoints have been created at 576px, 768px and 992px.
- Lastly, I used event capturing to only employ 1 onclick event handler to show all full-screen images.

## Future Additions

- If more time was available, I would have made the site more accessible. I added alt tags to images, but I did not test screen reader functionality. Furthermore, I don't forsee a full-screen function benefitting a screen reader use-case at this time.

- The code appears to be maintainable, reusable and have a decent design. One potential future issue is to provide the 'viewFullscreen()' function a more robust check for the captured img click event. Specifically, the current method checks if the clicked element's first class is "image-gallery". There is a better way to do this to protect for future classes on these img components. The full-screen image functions could also likely be optimized for legibility and verbosity.

- If there was an API that provided new image data, I would implement an infinite scroll feature as a bonus.

- Any feedback would be appreciated! Please let me know if there's a better way to execute specific tasks.
