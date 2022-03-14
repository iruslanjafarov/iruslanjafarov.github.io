// 😎 Код Джафарова 😎, ну почти)
$(function() {
    var title = document.title,
      animateSeq = ["|"],
        animateIndex = 0,
        titleIndex = 0;
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animateIndex = 0;
            titleIndex = 0
        }
        if (animateIndex > 1) {
            titleIndex++;
            animateIndex = 0
        }
        document.title = loadTitle + animateSeq[0];
        animateIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 150);
});

let preloader = document.querySelector('.preloader')
window.addEventListener('load', () => {
    preloader.classList.add('hide')
    setTimeout(() => {
        preloader.remove()
    }, 300);
})

tippy('#tooltip-header', {
    content: 'Да, это я',
    placement: 'bottom',
    animation: 'scale-subtle',
    theme: 'light',
})
tippy('#tooltip-header-project', {
    content: 'Soon',
    placement: 'bottom',
    animation: 'scale-subtle',
    theme: 'light-border',
})
tippy('#link-telegram', {
    content: 'Telegram',
    placement: 'top',
    animation: 'scale-subtle',
    theme: 'light-border',
})
tippy('#link-instagram', {
    content: 'Instagram',
    placement: 'top',
    animation: 'scale-subtle',
    theme: 'light-border',
})
tippy('#link-vk', {
    content: 'VK',
    placement: 'bottom',
    animation: 'scale-subtle',
    theme: 'light-border',
})
tippy('#link-youtube', {
    content: 'YouTube',
    placement: 'bottom',
    animation: 'scale-subtle',
    theme: 'light-border',
})
tippy('#link-github', {
    content: 'GitHub',
    placement: 'top',
    animation: 'scale-subtle',
    theme: 'light-border',
})
tippy('#link-steam', {
    content: 'Steam',
    placement: 'top',
    animation: 'scale-subtle',
    theme: 'light-border',
})
var typed = new Typed('#typed', {
    typeSpeed: 75,
    backSpeed: 60,
    startDelay: 150,
    loop: true,
    stringsElement: '#typed-string',
});

document.onkeydown = function(e) {
    if(event.keyCode == 123) {
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
    }
}
document.oncontextmenu = function (){return false};