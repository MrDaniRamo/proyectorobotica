$(".container").on("click", '.agregar', function(e){
    e.preventDefault();
    var text1 = "";
    var div1 = '<div class="lis">';
    var div2 = '</div>';
    var text1 = $("#newText").val();
    text1 = '<li> <p>' + text1 + ' </p></li>';
    var butCheck = '<button class = "checar"> check </button>' ;
    var butDel = '<button class = "del"> delete </button>';

    $(".Lista").append(div1 + text1 + butCheck + butDel+ div2);
})

$(".Lista").on("click",".checar", function(){
    $(this).prev().toggleClass('chec');
}) 

$(".Lista").on("click",".del", function(){
    $(this).parent().remove();
}) 