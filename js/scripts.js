 async function fetchImageData() {
  try {
    const response = await fetch('http://localhost:8080/data/photos.json', {
      mode: 'cors',
    })
    const photos = response.json()
    return photos
  } catch (error) {
      console.error(error);
  }
}

function appendImages(imgObjects){
  const container = document.getElementById('image-container');
  const docFrag = document.createDocumentFragment();

  imgObjects.forEach(function(imgObject, index, originalArray) {
      const imgEl = document.createElement('img');
      imgEl.srcset = `"${imgObject.urls.small} 600w,
        ${imgObject.urls.regular} 1000w,
        ${imgObject.urls.full} 5000w
      "`;
      imgEl.sizes = `"(min-width: 1024px) 25vw,
       (min-width: 640px) and (max-width: 1023px) 50vw,
       (max-width: 639px) 100vw
       "` 
      !!imgObject.description
      ? imgEl.alt = imgObject.description 
      : ''
      imgEl.src = imgObject.urls.regular
      imgEl.setAttribute("class", "image-gallery")
      docFrag.appendChild(imgEl);
  });
  
  container.appendChild(docFrag);
}

async function loadImages(){
  const imgObjects = await fetchImageData()
  appendImages(imgObjects)
}

loadImages()