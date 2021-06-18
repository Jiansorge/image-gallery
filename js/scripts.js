let imgs = []

fetch('http://localhost:8080/data/photos.json', {
  mode: 'cors',
})
.then(res=>res.json())
.then(res=>console.log(res))
//.then((res)=>imgs=[...res])
.catch(e=>console.log(e));

const container = document.getElementById('image-container');
const docFrag = document.createDocumentFragment();

imgs.forEach(function(imageObject, index, originalArray) {
    const img = document.createElement('img');
    img.src = imageObject.urls.regular;
    docFrag.appendChild(img);
});

container.appendChild(docFrag);