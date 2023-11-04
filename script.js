function toggleMode(){
    const body = document.documentElement

    body.classList.toggle('light');

    const img = document.querySelector('.profile img');

    if(body.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'mayk nothing')
    }
    else {
        img.setAttribute('src', './assets/avatar.png')
    }
}