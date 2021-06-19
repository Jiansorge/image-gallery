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

async function saveImageData(){
  const imgObjects = await fetchImageData()
  console.log("imgobjcs",imgObjects)
  return imgObjects
}

saveImageData()

function appendImages(imgObjects){
  const container = document.getElementById('image-container');
  const docFrag = document.createDocumentFragment();

  imgObjects.forEach(function(imgObject, index, originalArray) {
      const img = document.createElement('img');
      img.src = imgObject.urls.small;
      docFrag.appendChild(img);
  });

  container.appendChild(docFrag);
}

//appendImages(data)