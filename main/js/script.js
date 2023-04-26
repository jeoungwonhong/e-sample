$(function(){
    $('.listbox-hong').click(function(){
        $('#angle-hong').toggleClass('act-hong');
        $('.s-list-hong').toggleClass('d-none-hong');
    })


    // 데이터 받기
    const value_hong = document.querySelector('.select-hong span');
    const list_hong = document.querySelectorAll('.s-list-hong li');

    const handleSelect = (item) => {
        value_hong.innerHTML = item.textContent;
    }

    // 옵션 클릭시 클릭한 옵션을 넘김
    list_hong.forEach(option => {
        option.addEventListener('click', () => handleSelect(option))
    })


    $('.libtn-hong').click(function(){
        $('.libtn-hong').removeClass('selected-hong');
        $(this).toggleClass('selected-hong');
    })
});

$(document).ready(function(){
    $('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});