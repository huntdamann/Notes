const rootButton = document.querySelector('#root-handle');
const cButton = document.querySelector('#c-handle'); //security
const parallax = document.querySelector('#folder-handle'); //parallax
const boiler = document.querySelector('#folder-handle-2'); //parallax
const blog = document.querySelector('#folder-handle-3'); //blog
const osint = document.querySelector('#folder-handle-4'); //osint
const react = document.querySelector('#folder-handle-5'); //osint
const parallaxFiles = document.querySelector('#files'); //Files for parallax folder
const boilerFiles = document.querySelector('#files-2'); // files for boiler plate folder 
const blogFiles = document.querySelector('#files-3'); // files for boiler plate folder 
const osintFiles = document.querySelector('#files-4'); // files for boiler plate folder 
const reactFiles = document.querySelector('#files-5'); // files for boiler plate folder

rootButton.addEventListener('click', (e) => {

    parallax.classList.toggle('hidden');
    boiler.classList.toggle('hidden');
    react.classList.toggle('hidden');
})
cButton.addEventListener('click', (e) => {

    blog.classList.toggle('hidden');
    osint.classList.toggle('hidden');
})
parallax.addEventListener('click', (e) => {

    parallaxFiles.classList.toggle('hidden');

})
boiler.addEventListener('click', (e) => {

    boilerFiles.classList.toggle('hidden');

})
blog.addEventListener('click', (e) => {

    blogFiles.classList.toggle('hidden');

})
osint.addEventListener('click', (e) => {

    osintFiles.classList.toggle('hidden');

})
react.addEventListener('click', (e) =>  {

    reactFiles.classList.toggle('hidden');
})


