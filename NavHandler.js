function openNav() {
    document.getElementById("mySidenav").style.width = "70%"
    document.getElementById('backdrop').style.display = "block"
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0"
    document.getElementById('backdrop').style.display = "none"
}


$('#home-link').on('click', function(){
    const home = $('#home').position().top

    $('html, body').animate({
        scrollTop : home
    }, 1000)
})

$('#about-link').on('click', function(){
    const about = $('#about').position().top

    $('html, body').animate({
        scrollTop : about
    }, 1000)
})

$('#products-link').on('click', function(){
    const products = $('products').position().top

    $('html, body').animate({
        scrollTop : products
    }, 1000)
})

$('#contact-link').on('click', function(){
    const contact = $('#contact').position().top

    $('html, body').animate({
        scrollTop : contact
    }, 1000)
})

$('#socials-link').on('click', function(){
    const socials = $('#socials').position().top

    $('html, body').animate({
        scrollTop : socials
    }, 1000)
})