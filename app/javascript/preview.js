if (document.URL.match( /new/ )) {
  document.addEventListener('DOMContentLoaded', () => {
    const imageList = document.getElementById('image-list');
    document.getElementById('image').addEventListener('change', (e) => {
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);
      const imageElement = document.createElement('div');
      const blobImage = document.createElement('img');

      blobImage.setAttribute('src', blob);
      blobImage.setAttribute('width', 200);
      blobImage.setAttribute('height', 200);

      imageElement.appendChild(blobImage);
      imageList.appendChild(imageElement);
    });
  });
};