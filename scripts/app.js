
document.addEventListener('DOMContentLoaded', function () {
    // console.log('aaa');

    $padinner = document.querySelector('.padinner');
    $padfont = document.querySelector('.padfont');
    $leftbutton = document.querySelector('.leftbutton');
    $rightbutton = document.querySelector('.rightbutton');
    $facog = document.querySelector('.fa-cog');
    $leftbuttonarrow = document.querySelector('.leftbuttonarrow');
    $leftbuttoncog = document.querySelector('.leftbuttoncog');

    $padfont.addEventListener('click', function () {
        $padinner.classList.remove('home');
        $padinner.classList.add('flip');

        $leftbutton.classList.remove('fa-cog');
        $leftbutton.classList.add('fa-arrow-left');

        $rightbutton.classList.remove('fa-pencil-square-o');
        $rightbutton.classList.add('fa-trash');

        $leftbuttoncog.style.visibility = 'hidden';
    });


    $leftbutton.addEventListener('click', function () {
        $padinner.classList.remove('flip');
        $padinner.classList.add('home');

        $leftbutton.classList.remove('fa-arrow-left');
        $leftbutton.classList.add('fa-cog');

        $rightbutton.classList.remove('fa-trash');
        $rightbutton.classList.add('fa-pencil-square-o');
    });

    $facog.addEventListener('click', function () {
        $facog.style.transform = 'rotateZ(180deg)';
        setTimeout((function () {
            $facog.style.transform = 'rotateZ(0deg)';
        }), 500);

        console.log('qqq');
    });



})