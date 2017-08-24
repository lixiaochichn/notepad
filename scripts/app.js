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
    let $padcover = document.querySelectorAll('.padcover');
    let $centertitle = document.querySelector('.centertitle');
    let $parent;
    let num = 4;



    $padbody.addEventListener('click', function (event) {
        let target = event.target;

        if (target.matches('.padfont') || target.matches('.padback')) {
            $parent = target.parentElement;
        } else {
            $parent = target.parentElement.parentElement;
        }

        // console.log($parent);
        if (target.matches('.padlist')) {
            editmode($parent);
        };
    }, true);

    function editmode(targetlist) {
        $centertitle.innerHTML = `<div class="centertitle">Edit</div>`;
        // 点击的便签翻转            
        targetlist.classList.remove('home');
        targetlist.classList.add('flip');

        // 标题栏变更为箭头和垃圾桶
        $leftbutton.classList.remove('fa-cog');
        $leftbutton.classList.add('fa-arrow-left');

        $rightbutton.classList.remove('fa-pencil-square-o');
        $rightbutton.classList.add('fa-trash');
        removeorder();

        // 点击的便签排到首位
        targetlist.parentElement.classList.add('zindex');
        setTimeout(function () {
            targetlist.parentElement.classList.add('order');

        }, 150);
    };

    function listmode() {
        $centertitle.innerHTML = `<div class="centertitle">All</div>`;
        
        $leftbutton.classList.remove('fa-arrow-left');
        $leftbutton.classList.add('fa-cog');

        $rightbutton.classList.remove('fa-trash');
        $rightbutton.classList.add('fa-pencil-square-o');
    };

    function removeorder() {
        $padcover.forEach(function (list) {
            list.classList.remove('order');
            list.classList.remove('zindex');
        });
    };


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

        //点击齿轮，齿轮旋转
        if (target.matches('.fa-cog')) {
            $facog.style.transform = 'rotateZ(180deg)';
            setTimeout((function () {
                $facog.style.transform = 'rotateZ(0deg)';
            }), 500);
        };

        //点击箭头返回
        if (target.matches('.fa-arrow-left')) {
            $parent.classList.remove('flip');
            $parent.classList.add('home');

            listmode();
        };

        //点击铅笔新增便签

        if (target.matches('.fa-pencil-square-o')) {
            let html = `<div class="padlist padcover order">
            <div class="padlist padinner home">
                <div class="padlist padfont">
                    <div class="padlist fontdate">星期五 7月28日 下午8：23</div>
                    <div class="padlist fonttitle">使用教程${num}</div>
                </div>
                <textarea class="padback">${num}正因为人生没有意义，才值得一过。人生、宇宙这些东西不能深想。你想想，一个人来了几十年之后，消失了，就像没有存在一样，其实挺可怕的。但一个有灵魂的人，是不可能不想这些事情的。我现在做的就是如何应对‘生命无意义’这件事。</textarea>
            </div>
        </div>`;
            
            $padbody.innerHTML = html.substring(0) + $padbody.innerHTML;
            num++;
            $padcover = document.querySelectorAll('.padcover');
            $parent = $padcover[0].children[0];
            // console.log();
            // $padcover[0].children[0].click();

            setTimeout(function () {
                editmode($parent);
            }, 0);
        };

        //点击垃圾桶删除
        if (target.matches('.fa-trash')) {
            // $parent.classList.remove('flip');
            // $parent.classList.add('home');
            $parent.parentElement.classList.add('translate3d');
            setTimeout(function () {
                $parent.parentElement.parentElement.removeChild($parent.parentElement);
            }, 490);
            listmode();
        };


    });







})