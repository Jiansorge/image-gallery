fetch('http://localhost:8080/data/photos.json', {
  mode: 'cors',
})
.then(res => res.json())
//.then(res => console.log("res:",res))
.then(data => {
  const container = document.getElementById('image-container');
  const docFrag = document.createDocumentFragment();

  data.forEach(function(imageObject, index, originalArray) {
      const img = document.createElement('img');
      img.src = imageObject.urls.small;
      docFrag.appendChild(img);
      console.log("img",index,img)
  });

  container.appendChild(docFrag);
})
.then(console.log("imageObjects:",imgObjects))
.catch(e=>console.log(e));

