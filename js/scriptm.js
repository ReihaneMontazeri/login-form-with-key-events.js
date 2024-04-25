let userName = document.querySelector('.username')
let password = document.querySelector('.password')
let modal = document.querySelector('.modal')
let usernameWarning = document.querySelector('.usernameWarning')
let passwordWarning = document.querySelector('.passwordWarning')

function dataValidation(){
    let userNameValue = userName.value
    let passwordValue = password.value
    
    if (userNameValue.length < 12 || passwordValue.length < 8) {
        modal.innerHTML = 'لطفا اطلاعات را به درستی وارد نمایید.'
        modal.style.backgroundColor = 'red'
        modal.style.display = 'inline'
    }else{
        modal.style.backgroundColor = 'green'
        modal.innerHTML = 'لاگین با موفقیت انجام شد'
        modal.style.display = 'inline'
    }
    setTimeout(() => {
        modal.style.display = 'none'
    }, 3000 );
}

userName.addEventListener('keypress', function(){
    if(userName.value.length < 8){
        usernameWarning.style.display = 'block'
        usernameWarning.innerHTML = 'Please enter 12 chracters.'
    }else{
        usernameWarning.style.display = 'none'
    }
})
password.addEventListener('keypress', function(){
    if(password.value.length < 8){
        passwordWarning.style.display = 'block'
        usernameWarning.innerHTML = 'Please enter 8 chracters.'

    }else{
        passwordWarning.style.display = 'none'
    }
})