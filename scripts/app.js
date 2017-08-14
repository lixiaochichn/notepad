
document.addEventListener('DOMContentLoaded', function () {
    // console.log('aaa');

    let $padinner = document.querySelector('.padinner');
    let $padfont = document.querySelector('.padfont');
    let $leftbutton = document.querySelector('.leftbutton');
    let $rightbutton = document.querySelector('.rightbutton');
    let $facog = document.querySelector('.fa-cog');
    // $leftbuttonarrow = document.querySelector('.leftbuttonarrow');
    let $header = document.querySelector('.header');
    let $padbody = document.querySelector('.padbody');
    let $parent;



    $padbody.addEventListener('click', function (event) {
        let target = event.target;

        if (target.matches('.padfont')||target.matches('.padback')) {
            $parent = target.parentElement;
        } else {
            $parent = target.parentElement.parentElement;
        }

        console.log($parent);
        if (target.matches('.padlist')) {
            $parent.classList.remove('home');
            $parent.classList.add('flip');
            $parent.classList.add('show');

            $leftbutton.classList.remove('fa-cog');
            $leftbutton.classList.add('fa-arrow-left');

            $rightbutton.classList.remove('fa-pencil-square-o');
            $rightbutton.classList.add('fa-trash');
        };

    }, true);

    // $padfont.addEventListener('click', function () {
    //     $padinner.classList.remove('home');
    //     $padinner.classList.add('flip');
    //     $leftbutton.classList.remove('fa-cog');
    //     $leftbutton.classList.add('fa-arrow-left');
    //     $rightbutton.classList.remove('fa-pencil-square-o');
    //     $rightbutton.classList.add('fa-trash');
    // });


    $header.addEventListener('click', function (event) {
        let target = event.target;
        if (target.matches('.fa-cog')) {
            $facog.style.transform = 'rotateZ(180deg)';
            setTimeout((function () {
                $facog.style.transform = 'rotateZ(0deg)';
            }), 500);
        };
        if (target.matches('.fa-arrow-left')) {
            $parent.classList.remove('flip');
            $parent.classList.add('home');

            $leftbutton.classList.remove('fa-arrow-left');
            $leftbutton.classList.add('fa-cog');

            $rightbutton.classList.remove('fa-trash');
            $rightbutton.classList.add('fa-pencil-square-o');
        };

    });


    // $facog.addEventListener('click', function () {
    //     $facog.style.transform = 'rotateZ(180deg)';
    //     setTimeout((function () {
    //         $facog.style.transform = 'rotateZ(0deg)';
    //     }), 500);

    //     console.log('qqq');
    // });



})