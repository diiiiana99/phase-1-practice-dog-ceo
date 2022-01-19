console.log('%c HI', 'color: firebrick')

    
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(r => r.json())
    .then(json => renderImages(json))
    .catch(error => console.error(error))
    

    function renderImages (images) {

        const imageContainer = document.getElementById('dog-image-container');
        images.message.forEach( dog => {
        const dogImg = document.createElement('img')
        dogImg.src = dog;
        imageContainer.appendChild(dogImg);
    });
    }

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(r => r.json())
    .then(json => renderBreeds(json))
    .catch(error => console.error(error))

    function renderBreeds (breeds) {
        const dogBreeds = document.getElementById('dog-breeds');
        for( const dog in breeds.message ) {
            const dogBreed = document.createElement('li')
            dogBreed.textContent = dog;
            dogBreeds.appendChild(dogBreed);
        };
    }
  
document.addEventListener ('click' , function (e) {
    e.target.style.color = "pink"
}
) 