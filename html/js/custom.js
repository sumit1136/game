$(document).ready(function(){
    var get_position=null;
    var get_name=null;
    var get_position1=null;

    $(".tiger").click(function(){
        get_position1= null;
        get_name = null;
        get_position1 = $(this).attr('data-position');
        get_name = $(this).data('name');
        console.log(get_position1);
        console.log(get_name);
    });
    var count=0;
    var prevPos=null;
    var count2=0;
    var prevPos2=null;
    $(".pointer").click(function(){
        var get_pointer_position = $(this).attr('data-position');
        var nameArr = get_pointer_position.toString().split('.');
        console.log(nameArr);
        if(get_name == "tiger1" || get_name == "tiger2"){
            $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
            $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
        }
        else{
            if(get_position == "1.1" && ((nameArr[0] == "0" && (nameArr[1] == "0" || nameArr[1] == "1"|| nameArr[1] == "2")) || (nameArr[0] == "1" && (nameArr[1] == "0" || nameArr[1] == "2")) || (nameArr[0] == "2" && (nameArr[1] == "0" || nameArr[1] == "1"|| nameArr[1] == "2")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "1.3" && ((nameArr[0] == "0" && (nameArr[1] == "2" || nameArr[1] == "3"|| nameArr[1] == "4")) || (nameArr[0] == "1" && (nameArr[1] == "2" || nameArr[1] == "4")) || (nameArr[0] == "2" && (nameArr[1] == "2" || nameArr[1] == "3"|| nameArr[1] == "4")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "3.1" && ((nameArr[0] == "2" && (nameArr[1] == "0" || nameArr[1] == "1"|| nameArr[1] == "2")) || (nameArr[0] == "3" && (nameArr[1] == "0" || nameArr[1] == "2")) || (nameArr[0] == "4" && (nameArr[1] == "0" || nameArr[1] == "1"|| nameArr[1] == "2")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }
            
            else if(get_position == "3.3" && ((nameArr[0] == "2" && (nameArr[1] == "2" || nameArr[1] == "3"|| nameArr[1] == "4")) || (nameArr[0] == "3" && (nameArr[1] == "2" || nameArr[1] == "4")) || (nameArr[0] == "4" && (nameArr[1] == "2" || nameArr[1] == "3"|| nameArr[1] == "4")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "0.0" && ((nameArr[0] == "0" && nameArr[1] == "1") || (nameArr[0] == "1" && (nameArr[1] == "0" || nameArr[1] == "1")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "0.4" && ((nameArr[0] == "0" && nameArr[1] == "3") || (nameArr[0] == "1" && (nameArr[1] == "3" || nameArr[1] == "4")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "4.0" && ((nameArr[0] == "4" && nameArr[1] == "1") || (nameArr[0] == "3" && (nameArr[1] == "0" || nameArr[1] == "1")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "4.4" && ((nameArr[0] == "3" && nameArr[1] == "4") || (nameArr[1] == "3" && (nameArr[0] == "3" || nameArr[0] == "4")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "0.1" && ((nameArr[0] == "0" && (nameArr[1] == "0" || nameArr[1] == "2")) || (nameArr[0] == "1" && nameArr[1] == "1"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "0.3" && ((nameArr[0] == "0" && (nameArr[1] == "2" || nameArr[1] == "4")) || (nameArr[0] == "1" && nameArr[1] == "3"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "1.0" && ((nameArr[1] == "0" && (nameArr[0] == "0" || nameArr[0] == "2")) || (nameArr[0] == "1" && nameArr[1] == "1"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "1.4" && ((nameArr[1] == "4" && (nameArr[0] == "0" || nameArr[0] == "2")) || (nameArr[0] == "1" && nameArr[1] == "3"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "3.0" && ((nameArr[1] == "0" && (nameArr[0] == "2" || nameArr[0] == "4")) || (nameArr[0] == "3" && nameArr[1] == "1"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "3.4" && ((nameArr[1] == "4" && (nameArr[0] == "2" || nameArr[0] == "4")) || (nameArr[0] == "3" && nameArr[1] == "3"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "4.1" && ((nameArr[0] == "4" && (nameArr[1] == "0" || nameArr[1] == "2")) || (nameArr[0] == "3" && nameArr[1] == "1"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "4.3" && ((nameArr[0] == "4" && (nameArr[1] == "2" || nameArr[1] == "4")) || (nameArr[0] == "3" && nameArr[1] == "3"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "1.2" && ((nameArr[0] == "1" && (nameArr[1] == "1" || nameArr[1] == "3")) || nameArr[1] == "2" && (nameArr[0] == "0" || nameArr[0] == "3"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }
        }
        
        if(count>0 && get_name == "tiger1"){
            get_position1=prevPos;
            console.log(get_position1);
        }
        if(get_name == "tiger2" && count2>0){
            get_position1=prevPos2;
            console.log(get_position1);
        }
        if(get_position1){
            var delPos=[(parseInt(get_position1.toString().split('.')[0])+parseInt(nameArr[0]))/2,(parseInt(get_position1.toString().split('.')[1])+parseInt(nameArr[1]))/2];
        // console.log(delPos);
        var ss = delPos[0]+'.'+delPos[1];
        if(get_name == "tiger1" || get_name == "tiger2"){
            try{
                var ddddd = $("[data-position='"+ss+"']")[1].remove();
                console.log("Del "+ss);
            }
            catch(err) {
                // break;
            }
        }
        
        // console.log(ddddd)
        if(get_name == "tiger1")
        {
            count++;
        }
        if(get_name == "tiger2")
        {
            count2++;
        }
        if(get_name == "tiger1"){
            prevPos= get_pointer_position;
        }
        if(get_name == "tiger2"){
            prevPos2 = get_pointer_position;
        }
        
        }
        get_name = null;
    })
    $(".goat").click(function(){
        get_position= null;
        // get_name = null;
        get_position = $(this).attr('data-position');
        get_name = $(this).data('name');
        console.log(get_position);
        // console.log(get_name);
    });
})
