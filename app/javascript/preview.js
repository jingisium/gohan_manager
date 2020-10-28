
  window.addEventListener('load', () => {
    
    const imageList = document.getElementById('image-list');
    const image = document.getElementById('image');
    image.addEventListener('change', (e) => {
      if(e.target.files.length == 1){
        const file = e.target.files[0];
        const blob = window.URL.createObjectURL(file);
        const imageElement = document.createElement('div');
        const blobImage = document.createElement('img');

        blobImage.setAttribute('id', 'image-preview');
        blobImage.setAttribute('src', blob);
        blobImage.setAttribute('width', 200);
        blobImage.setAttribute('height', 200);

        imageElement.appendChild(blobImage);
        imageList.appendChild(imageElement);
      }else{
        const imagePreview = document.getElementById('image-preview');
        imagePreview.remove();
      };
    });
  });