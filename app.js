
//Gender selection
const gender = document.querySelectorAll('.sex')
function deselect (){
    gender.forEach(gender => gender.checked = false)
}

//Age Validation

//Finish

const finishBtn = document.querySelector('.finish')
const finalPage = document.querySelector('.main')


finishBtn.addEventListener('click', ()=>{
    finalPage.innerHTML= "Thank you for your participation!"
    

})


