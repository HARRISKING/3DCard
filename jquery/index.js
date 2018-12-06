$(function() {
    // mouseenter鼠标移入
    $(".bg").mouseenter(function() {
      // $('.bg')元素border距离浏览器边框的距离（鼠标横纵坐标的初始值）
      var thisPX = $(this).offset().left;
      var thisPY = $(this).offset().top;
      // 目标元素宽高
      var boxWidth = $(this).outerWidth();
      var boxHeight = $(this).outerHeight();
      $(this).addClass("threeD");
      $(".threeD").mousemove(function(event) {
        // 计算鼠标在目标元素bg内的横纵坐标值
        var mouseX = event.pageX - thisPX;
        var mouseY = event.pageY - thisPY;
        var X;
        var Y;
        // if (mouseX > boxWidth / 2) {
        //   X = mouseX - boxWidth/2;
        // } else {
        //   X = mouseX - boxWidth/2;
        // }
        // if (mouseY > boxHeight / 2) {
        //   Y = boxHeight/2 - mouseY;
        // } else {
        //   Y = boxHeight/2 - mouseY;
        // }
        X = mouseX - boxWidth/2;
        Y = boxHeight/2 - mouseY;
        $(".threeD").css({
          "-webkit-transform": "rotateY(" + X / 50 + "deg) " + "rotateX(" + Y / 50 + "deg)"
        });
        
        // console.log(X + "," + Y);
      });
    });
    $(".bg").mouseleave(function() {
      $(this).removeClass("threeD");
      $(this).css({
        "-webkit-transform": "rotateY(0deg) rotateX(0deg)"
      });
    });
  });