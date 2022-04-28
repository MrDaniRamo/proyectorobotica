$(".container").on("click", '.agregar', function(e){
    e.preventDefault();
    var text1 = "";
    var div1 = '<div class="btn">';
    var div2 = '</div>';
    var text1 = $("#newText").val();

    var butCheck = '<button class = "answer">' + text1 + '</button>' ;
    //var butDel = '<button class = "del"> delete </button>';

    var i = 0;
    for(i = 1; i < 5; i++){
        var bot = "";
        bot = '#btn_' + i;
        console.log(bot);
        $(bot).append(div1 +  butCheck + div2);
        //$(bot).append(div1 + text1 + butCheck + butDel+ div2);
    }
    //$(".botones").append(div1 + text1 +  butDel+ div2);
})

$("#btn_1").on("click",".answer", function(){
    var btn_class = $(this).parent().parent().attr("class");
    console.log(toString(btn_class));
    
    if($(this).parent().parent().attr("class") == "btn_vis"){
        $(this).parent().parent().removeClass("btn_vis");
        $(this).parent().parent().addClass("btn_invis");
    }
    else{
        $(this).parent().parent().removeClass("btn_invis");
        $(this).parent().parent().addClass("btn_vis");
    }
    
}) 

$("#btn_2").on("click",".answer", function(){
    
    if($(this).parent().parent().attr("class") == "btn_vis"){
        $(this).parent().parent().removeClass("btn_vis");
        $(this).parent().parent().addClass("btn_invis");
    }
    else{
        $(this).parent().parent().removeClass("btn_invis");
        $(this).parent().parent().addClass("btn_vis");
    }
}) 

$("#btn_3").on("click",".answer", function(){
    
    if($(this).parent().parent().attr("class") == "btn_vis"){
        $(this).parent().parent().removeClass("btn_vis");
        $(this).parent().parent().addClass("btn_invis");
    }
    else{
        $(this).parent().parent().removeClass("btn_invis");
        $(this).parent().parent().addClass("btn_vis");
    }
}) 

$("#btn_4").on("click",".answer", function(){
    
    if($(this).parent().parent().attr("class") == "btn_vis"){
        $(this).parent().parent().removeClass("btn_vis");
        $(this).parent().parent().addClass("btn_invis");
    }
    else{
        $(this).parent().parent().removeClass("btn_invis");
        $(this).parent().parent().addClass("btn_vis");
    }
}) 


$("#btn_1").on("click",".del", function(){
    $(this).parent().remove();
})

$("#btn_2").on("click",".del", function(){
    $(this).parent().remove();
})

$("#btn_3").on("click",".del", function(){
    $(this).parent().remove();
})

$("#btn_4").on("click",".del", function(){
    $(this).parent().remove();
})