locator = document.querySelector('.locator')
map-area = document.querySelector('.map-area')

locator.addEventlistener('click',()=>{
map-area.classList.toggle('v-resp');
})