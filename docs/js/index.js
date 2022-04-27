$(".container").on("click", '.agregar', function(e){
    e.preventDefault();
    var text1 = "";
    var div1 = '<div class="lis">';
    var div2 = '</div>';
    var text1 = $("#newText").val();
    text1 = '<p>' + text1 + ' </p>';
    var butCheck = '<button class = "checar"> check </button>' ;
    var butDel = '<button class = "del"> delete </button>';

    $("#btn_1").append(div1 + text1 + butCheck + butDel+ div2);
})

$("#btn_1").on("click",".checar", function(){
    $(this).prev().toggleClass('chec');
}) 

$("#btn_1").on("click",".del", function(){
    $(this).parent().remove();
}) 