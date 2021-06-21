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
      imgEl.srcset = `"${imgObject.urls.thumb} 200w,
        ${imgObject.urls.small} 400w,
        ${imgObject.urls.regular} 1080w,
        ${imgObject.urls.full} 3333w
      "`;

      imgEl.sizes = `"(min-width: 992px) 23vw,
      (min-width: 768px) and (max-width: 992px) 31%,
       (min-width: 576px) and (max-width: 768px) 48%,
       (max-width: 576px) 98%
       "`;

      !!imgObject.description
      ? (imgEl.alt = imgObject.description, 
        imgEl.title = imgObject.description)
      : ''
      imgEl.src = imgObject.urls.regular
      imgEl.setAttribute("class", "image-gallery")
      docFrag.appendChild(imgEl);
  });
  
  container.appendChild(docFrag);
  container.addEventListener("click",viewFullscreen,true)
}

async function loadImages(){
  const imgObjects = await fetchImageData()
  appendImages(imgObjects)
}

function viewFullscreen(e){
  if (!!e && e.target.nodeName === "IMG"
  && e.target.classList[0] === "image-gallery"
  ){
    const imgClone = e.target.cloneNode(true)
    imgClone.setAttribute("class", "fullscreen-image")
    const fullscreenContainer = document.getElementById("fullscreen-container");
    fullscreenContainer.appendChild(imgClone)
    fullscreenContainer.style.display = 'flex'
    const body = document.getElementsByTagName('body')[0]
    body.classList.add("fixed")
  }
}

function exitImageFullscreen(){
  const fullscreenContainer = document.getElementById("fullscreen-container");
  fullscreenContainer.style.display = 'none'
  const body = document.getElementsByTagName('body')[0]
  body.classList.remove("fixed")
  const img = document.querySelector(".fullscreen-image")
  if (!!img){
    fullscreenContainer.removeChild(img)
  }
}

loadImages()