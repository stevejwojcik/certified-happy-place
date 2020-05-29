$(document).ready(function(){

    var player1 = document.getElementById("player1"); 
    var player2 = document.getElementById("player2"); 
    var player3 = document.getElementById("player3"); 
    var player4 = document.getElementById("player4"); 
    var player5 = document.getElementById("player5"); 
    var player6 = document.getElementById("player6"); 

    $('#myCarousel').bind('slide.bs.carousel', function (e) {
        $('.transformMiles').removeClass('transform-active')
        $('.transformAssistance').removeClass('transform-active')
        $('.transformWarranty').removeClass('transform-active')
        $('.transformPolicy').removeClass('transform-active')
    });


    $('#myCarousel').bind('slid.bs.carousel', function (e) {
        var index = $(e.target).find(".active").index();
            if(index === 0) {//  (2 - 1) index is zero based
                createVideo1();
                // $('div.player2').html(''); 
                // $('div.player6').html(''); 
                player2.pause(); 
                player2.currentTime = 0;
                player6.pause(); 
                player6.currentTime = 0;
            }
            if(index === 1){ //  (2 - 1) index is zero based
                createVideo2();
                // $('div.player3').html(''); 
                // $('div.player1').html(''); 
                player1.pause(); 
                player1.currentTime = 0;
                player3.pause(); 
                player3.currentTime = 0;
            }
            if(index === 2){ //  (2 - 1) index is zero based
                createVideo3();
                // $('div.player4').html(''); 
                // $('div.player2').html(''); 
                player4.pause(); 
                player4.currentTime = 0;
                player2.pause(); 
                player2.currentTime = 0;
            }
            if(index === 3){ //  (2 - 1) index is zero based
                createVideo4();
                // $('div.player5').html(''); 
                // $('div.player3').html(''); 
                player5.pause(); 
                player5.currentTime = 0;
                player3.pause(); 
                player3.currentTime = 0;
            }
            if(index === 4){ //  (2 - 1) index is zero based
                createVideo5();
                // $('div.player6').html(''); 
                // $('div.player4').html('');
                player6.pause(); 
                player6.currentTime = 0;
                player4.pause(); 
                player4.currentTime = 0; 
            }
            if(index === 5){ //  (2 - 1) index is zero based
                createVideo6();
                player1.pause(); 
                player1.currentTime = 0;
                player5.pause(); 
                player5.currentTime = 0;
                // $('div.player1').html(''); 
                // $('div.player5').html(''); 
            }
    });


    $(".slide-one").click(function(){
        $("#myCarousel").carousel(0);
        createVideo1();
    });

    $(".slide-two").click(function(){
        $("#myCarousel").carousel(1);
        createVideo2();
    });

    $(".slide-three").click(function(){
        $("#myCarousel").carousel(2);
        createVideo3();
    });

    $(".slide-four").click(function(){
        $("#myCarousel").carousel(3);
        createVideo4();
    });

    $(".slide-five").click(function(){
        $("#myCarousel").carousel(4);
        createVideo5();
    });

    $(".slide-six").click(function(){
        $("#myCarousel").carousel(5);
        createVideo6();
    });


    $("#carouselModal").on("hidden.bs.modal", function () {
        player1.pause(); 
        player1.currentTime = 0;
        player2.pause(); 
        player2.currentTime = 0;
        player3.pause(); 
        player3.currentTime = 0;
        player4.pause(); 
        player4.currentTime = 0;
        player5.pause(); 
        player5.currentTime = 0;
        player6.pause(); 
        player6.currentTime = 0;
        // $('div.player1').html(''); 
        // $('div.player2').html(''); 
        // $('div.player3').html(''); 
        // $('div.player4').html(''); 
        // $('div.player5').html(''); 
        // $('div.player6').html(''); 
    });

    function createVideo1(event) {
        console.log("createVideo1");
        player1.play(); 
        // $('div.player1').html('<iframe src="https://www.youtube.com/embed/93BsQ0QVECo?ecver=1?controls=0&mute=0&showinfo=0&rel=0&autoplay=1&loop=1&playsinline=1"></iframe>');
    }

    function createVideo2(event) {
        console.log("createVideo2");
        player2.play(); 
        // $('div.player2').html('<iframe src="https://www.youtube.com/embed/N00A38JMBkk?ecver=1?controls=0&mute=0&showinfo=0&rel=0&autoplay=1&loop=1&playsinline=1"></iframe>');
    }

    function createVideo3(event) {
        console.log("createVideo3");
        player3.play(); 
        // $('div.player3').html('<iframe src="https://www.youtube.com/embed/43njvhIpcPk?ecver=1?controls=0&mute=0&showinfo=0&rel=0&autoplay=1&loop=1&playsinline=1"></iframe>');
    }

    function createVideo4(event) {
        console.log("createVideo4");
        player4.play(); 
        // $('div.player4').html('<iframe src="https://www.youtube.com/embed/AO20ktiJm9g?ecver=1?controls=0&mute=0&showinfo=0&rel=0&autoplay=1&loop=1&playsinline=1"></iframe>');
    }

    function createVideo5(event) {
        console.log("createVideo5");
        player5.play(); 
        // $('div.player5').html('<iframe src="https://www.youtube.com/embed/GIaJTORfvEY?ecver=1?controls=0&mute=0&showinfo=0&rel=0&autoplay=1&loop=1&playsinline=1"></iframe>');
    }

    function createVideo6(event) {
        console.log("createVideo6");
        player6.play(); 
        // $('div.player6').html('<iframe src="https://www.youtube.com/embed/U5H6E5ImSRc?ecver=1?controls=0&mute=0&showinfo=0&rel=0&autoplay=1&loop=1&playsinline=1"></iframe>');
    }


    $("#assistance").click(function(){
        $('.transformAssistance').addClass('transform-active')
    });

    $("#miles").click(function(){
         $('.transformMiles').addClass('transform-active')
         $('.transformWarranty').removeClass('transform-active')
    });

    $("#warranty").click(function(){
         $('.transformWarranty').addClass('transform-active')
         $('.transformMiles').removeClass('transform-active')
    });

    $("#policy").click(function(){
         $('.transformPolicy').addClass('transform-active')
    });

    $(".closeDisclaimer").click(function(){
        $('.transformMiles').removeClass('transform-active')
        $('.transformAssistance').removeClass('transform-active')
        $('.transformWarranty').removeClass('transform-active')
        $('.transformPolicy').removeClass('transform-active')
    });


}); //(document).ready(function