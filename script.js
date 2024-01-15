const input = document.querySelector('input')
const searchBtn = document.querySelector('.search')
const main = document.querySelector('.main')
const search = document.querySelector('.search')

searchBtn.addEventListener('keydown', (e) => {
    e.key === 'Enter' ? getBreeds() : null


})

function getBreeds() {

    fetch(`https://dog.ceo/api/breed/${input.value}/images`)
        .then(data => data.json())
        .then(dogs => {
            dogs.message.map(el =>{
                const imgDog = document.createElement('img')
                imgDog.src = el
                imgDog.style.width = '300px'
                imgDog.style.height = '200px'
                imgDog.style.objectFit = 'cover'
                main.append(imgDog)
            })
            console.log();
        })
}

searchBtn.addEventListener('click', () => {
    getBreeds()
})