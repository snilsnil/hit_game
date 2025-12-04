// $(document).ready(function(){
//     //마우스를 올리면 팝업으로 영상나옴
//     $('.image').hover(function(){
//         var a=$(this).attr("id");
//         $(".a"+a).fadeIn();
//         $(".a"+a)[0].play();
//     }, function(){
//         var a=$(this).attr("id");
//         $(".a"+a).hide();
//         $(".a"+a)[0].pause();
//         $(".a"+a)[0].currentTime=0;
//     });
// });
var deviceWidth = window.innerWidth;
if (deviceWidth > 1023) {
    $(document).ready(function () {
        var playPromise;
        $('.image').hover(function () {
            var a = $(this).attr("id");
            $(".a" + a).fadeIn();
            playPromise = $(".a" + a)[0].play();
        }, function () {
            var a = $(this).attr("id");
            $(".a" + a).hide();
            if (playPromise !== undefined) {
                playPromise.then(function () {
                    $(".a" + a)[0].pause();
                    $(".a" + a)[0].currentTime = 0;
                    $(".a" + a)[0].load();
                });
            }
        });
    });
}