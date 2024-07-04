// --------------------------adressform  bật tắt adress form 
const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')
//console.log(adressclose)
adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex"
})
adressclose.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display = "none"
})
// --------------------------logaccount------ bật tắt account form
const accountbtn = document.querySelector('#account-form')
const accountclose = document.querySelector('#account-close')
// console.log(accountclose)

accountbtn.addEventListener("click", function(){
    document.querySelector('.account-form').style.display = "flex"
})
accountclose.addEventListener("click",function(){
    document.querySelector('.account-form').style.display = "none"
})
//----------------------------slider----- chuyển ảnh 
let index = 0
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')

rightbtn.addEventListener("click",function(){
    index ++
    if(index>imgNumber.length-1){
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})
leftbtn.addEventListener("click",function(){
    index --
    if (index<=0){
        index=imgNumber.length
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})

//slider1----------------------  chuyển tiêu đề viền vàng 
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')

//console.log(imgNumberLi)
imgNumberLi.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeactive()
        document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
        image.classList.add("active")
    })
})
function removeactive(){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
//slider2----------------- Auto chuyen anh+tieu de
function imgAuto (){
    index ++
    if(index>imgNumber.length-1){
        index=0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
    imgNumberLi[index].classList.add("active")
    //console.log(index)
}
setInterval(imgAuto,3000)