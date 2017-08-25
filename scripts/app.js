document.addEventListener('DOMContentLoaded', function () {

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
    let $setview = document.querySelector('.set-view');
    let $setheader = document.querySelector('.set-header');
    let $parent;
    let num = 4;
    let weeks = ['日', '一', '二', '三', '四', '五', '六'];




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
            mydate();
        };
    }, true);

    function mydate() {
        var myDate = new Date();
        let year = myDate.getFullYear();
        let week = myDate.getDay();
        let month = myDate.getMonth();
        let day = myDate.getDate();
        let hour = myDate.getHours();
        let minute = myDate.getMinutes();
        let second = myDate.getSeconds();
        let times = `星期${weeks[week]} ${year}年${month+1}月${day}日 ${hour}:${minute}:${second}`;
        // console.log(times);
        return times;
    };

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




    $header.addEventListener('click', function (event) {
        let target = event.target;

        //点击齿轮，齿轮旋转
        if (target.matches('.fa-cog')) {
            $facog.style.transform = 'rotateZ(180deg)';
            setTimeout((function () {
                $facog.style.transform = 'rotateZ(0deg)';
            }), 500);
            $setview.classList.remove('set-hidden');
            $setview.classList.add('set-show');

        };

        //点击箭头返回
        if (target.matches('.fa-arrow-left')) {
            if ($parent.children[1].value === '') {
                // console.log('null');
                detele($parent);

                listmode();
                return;
            }

            $parent.classList.remove('flip');
            $parent.classList.add('home');
            $parent.children[0].children[0].innerHTML = `${mydate()}`;
            $parent.children[1].innerHTML = $parent.children[1].value;
            $parent.children[0].children[1].innerHTML = $parent.children[1].value;
            listmode();
        };

        //点击铅笔新增便签

        if (target.matches('.fa-pencil-square-o')) {
            let html = `<div class="padlist padcover order">
                    <div class="padlist padinner home">
                    <div class="padlist padfont">
                    <div class="padlist fontdate">${mydate()}</div>
                    <div class="padlist fonttitle"></div>
                    </div><textarea class="padback"></textarea></div></div>`;

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
            detele($parent);
            listmode();

        };

    });

    function detele(target) {
        target.parentElement.classList.add('translate3d');
        setTimeout(function () {
            target.parentElement.parentElement.removeChild(target.parentElement);
        }, 490);
    };


    $setheader.addEventListener('click', function (event) {
        let target = event.target;
        if (target.matches('.fa-arrow-left') || target.matches('.fa-check-circle')) {
            $setview.classList.remove('set-show');
            $setview.classList.add('set-hidden');
        };
    });





console.log(`
      ___           ___           ___           ___     
     /\\__\\         /\\__\\         /\\__\\         /\\  \\    
    /:/  /        /:/  /        /::|  |        \\:\\  \\   
   /:/__/        /:/  /        /:|:|  |         \\:\\  \\  
  /::\\  \\ ___   /:/  /  ___   /:/|:|  |__       /::\\  \\ 
 /:/\\:\\  /\\__\\ /:/__/  /\\__\\ /:/ |:| /\\__\\     /:/\\:\\__\\
 \\/__\\:\\/:/  / \\:\\  \\ /:/  / \\/__|:|/:/  /    /:/  \\/__/
      \\::/  /   \\:\\  /:/  /      |:/:/  /    /:/  /     
      /:/  /     \\:\\/:/  /       |::/  /     \\/__/      
     /:/  /       \\::/  /        /:/  /                 
     \\/__/         \\/__/         \\/__/                  
\n李晓驰(苏州)，应聘前端开发工程师 lixiaochichn@gmail.com
`);


});