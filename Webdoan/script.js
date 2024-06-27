const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')
// console.log(adressclose)
// adressbtn.addEventListener("click", function(){
//     document.querySelector('.adress-form').style.display = "flex"
// })
// adressclose.addEventListener("click",function(){
//     document.querySelector('.adress-form').style.display = "none"
// })
// // --------------------------
// const accountbtn = document.querySelector('#account-form')
// const accountclose = document.querySelector('#account-close')
// // console.log(accountclose)

// accountbtn.addEventListener("click", function(){
//     document.querySelector('.account-form').style.display = "flex"
// })
// accountclose.addEventListener("click",function(){
//     document.querySelector('.account-form').style.display = "none"
// })
//----------------------------slider
let index = 0
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')

rightbtn.addEventListener("click",function(){
    index = index +1
    if(index>imgNumber.length-1){
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})
leftbtn.addEventListener("click",function(){
    index = index -1
    if (index<=0){
        index=imgNumber.length
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})