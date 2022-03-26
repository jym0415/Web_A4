// $(document).ready(function(){
//     var count = 0 ;
//     var total = $("#slider li").length;

// setInterval(function(){
// count++
// count %= total

//     $("#slider li").eq(count).addClass("show").siblings().removeClass("show")

// },3000)



// })

$(document).ready(function(){
    var count = 0;
    var classNm = "show"
    var total = $("#slider li").length; 
    setInterval(function(){
      count++
      count %= total 

  
      $("#slider li").eq(count).addClass(classNm).siblings().removeClass(classNm)

    }, 3000);


  }) 