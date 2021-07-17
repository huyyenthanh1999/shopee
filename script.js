
// js for close open sign up modal:
var signUp = document.querySelector(".modal-layout");
function logOut(){
    signUp.style.display = "flex"
}

function closeModal(){
    signUp.style.display = "none"
}


// js for category-item:start
const categoryItems = document.querySelectorAll('.category-item')

categoryItems.forEach(categoryItem => {
    categoryItem.addEventListener('click', () => {
        removeActiveClasses()
        categoryItem.classList.add('active')
    })
})

function removeActiveClasses() {
    categoryItems.forEach(categoryItem => {
        categoryItem.classList.remove('active')
    })
}
// js for like action
const unlikes = document.querySelectorAll('.unlike')
const liked= document.querySelectorAll('.liked')
var likeGroups = document.querySelectorAll('.product__rating-group')
for(let i = 0;i < unlikes.length;i++){
    liked[i].addEventListener('click', ()=>{
        likeGroups[i].classList.remove('like-action');
    })
    unlikes[i].addEventListener('click', () =>{
        likeGroups[i].classList.add('like-action');
    })
}
