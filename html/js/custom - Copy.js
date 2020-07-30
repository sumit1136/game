$(document).ready(function(){
    var get_goat_position=null;
    var get_goat_name=null;
    var get_tiger_name=null;

    $(".tiger").click(function(){
        var get_tiger_position = $(this).data('position');
        var get_tiger_name = $(this).data('name');
        console.log(get_tiger_position)
        console.log(get_tiger_name)
    });

    $(".pointer").click(function(){
        var get_pointer_position = $(this).data('position');
        var nameArr = get_pointer_position.toString().split('.');
        console.log(nameArr);
        $('.'+get_goat_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
        $('.'+get_tiger_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});

    })
    $(".goat").click(function(){
        get_goat_position= null;
        get_goat_name = null;
        get_goat_position = $(this).data('position');
        get_goat_name = $(this).data('name');
        console.log(get_goat_position);
        console.log(get_goat_name);
    });
})