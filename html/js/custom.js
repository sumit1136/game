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
        var ss=null;
        var ss1=null;
        var delCheck=1;

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
        ss = delPos[0]+'.'+delPos[1];
        ss1 = $("[data-position='"+ss+"']")[1];
        // console.log($(ss1).attr('class').split(' ')[0]);
        

       
        
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

        if(get_name == "tiger1" || get_name == "tiger2"){
            if(get_position1== "1.1" && ((nameArr[0] == "0" && (nameArr[1] == "0" || nameArr[1] == "1"|| nameArr[1] == "2")) || (nameArr[0] == "1" && (nameArr[1] == "0" || nameArr[1] == "2" || (nameArr[1] =="3" && $(ss1).attr('class').split(' ')[0] == "goat"))) || (nameArr[0] == "2" && (nameArr[1] == "0" || nameArr[1] == "1"|| nameArr[1] == "2")) || (nameArr[0] == "3" && ((nameArr[1] == "1" || nameArr[1] == "3") && $(ss1).attr('class').split(' ')[0] == "goat")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "1.3" && ((nameArr[0] == "0" && (nameArr[1] == "2" || nameArr[1] == "3"|| nameArr[1] == "4")) || (nameArr[0] == "1" && (nameArr[1] == "2" || nameArr[1] == "4" || (nameArr[1] =="1" && $(ss1).attr('class').split(' ')[0] == "goat"))) || (nameArr[0] == "2" && (nameArr[1] == "2" || nameArr[1] == "3"|| nameArr[1] == "4")) || (nameArr[0] == "3" && ((nameArr[1] == "1" || nameArr[1] == "3") && $(ss1).attr('class').split(' ')[0] == "goat")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "3.1" && ((nameArr[0] == "2" && (nameArr[1] == "0" || nameArr[1] == "1"|| nameArr[1] == "2")) || (nameArr[0] == "3" && (nameArr[1] == "0" || nameArr[1] == "2" || (nameArr[1] =="3" && $(ss1).attr('class').split(' ')[0] == "goat"))) || (nameArr[0] == "4" && (nameArr[1] == "0" || nameArr[1] == "1"|| nameArr[1] == "2")) || (nameArr[0] == "1" && ((nameArr[1] == "1" || nameArr[1] == "3") && $(ss1).attr('class').split(' ')[0] == "goat")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }
            
            else if(get_position1 == "3.3" && ((nameArr[0] == "2" && (nameArr[1] == "2" || nameArr[1] == "3"|| nameArr[1] == "4")) || (nameArr[0] == "3" && (nameArr[1] == "2" || nameArr[1] == "4" || (nameArr[1] =="1" && $(ss1).attr('class').split(' ')[0] == "goat"))) || (nameArr[0] == "4" && (nameArr[1] == "2" || nameArr[1] == "3"|| nameArr[1] == "4")) || (nameArr[0] == "1" && ((nameArr[1] == "1" || nameArr[1] == "3") && $(ss1).attr('class').split(' ')[0] == "goat")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "2.2" && ((nameArr[0] == "1" && (nameArr[1] == "1" || nameArr[1] == "2"|| nameArr[1] == "3")) || (nameArr[0] == "2" && (nameArr[1] == "1" || nameArr[1] == "3" || ((nameArr[1] == "0" || nameArr[1] == "4") && $(ss1).attr('class').split(' ')[0] == "goat"))) || (nameArr[0] == "3" && (nameArr[1] == "1" || nameArr[1] == "2"|| nameArr[1] == "3")) || (nameArr[0] == "0" && (nameArr[1] == "0" || nameArr[1] == "2" || nameArr[1] == "4") && $(ss1).attr('class').split(' ')[0] == "goat") || (nameArr[0] == "4" && (nameArr[1] == "0" || nameArr[1] == "2" || nameArr[1] == "4") && $(ss1).attr('class').split(' ')[0] == "goat"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "0.0" && ((nameArr[0] == "0" && (nameArr[1] == "1" || (nameArr[1] == "2" && $(ss1).attr('class').split(' ')[0] == "goat"))) || (nameArr[0] == "1" && (nameArr[1] == "0" || nameArr[1] == "1")) || (nameArr[0] == "2" && ((nameArr[1] == "2" || nameArr[1] == "0") && $(ss1).attr('class').split(' ')[0] == "goat")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "0.4" && ((nameArr[0] == "0" && (nameArr[1] == "3" || (nameArr[1] == "2" && $(ss1).attr('class').split(' ')[0] == "goat"))) || (nameArr[0] == "1" && (nameArr[1] == "3" || nameArr[1] == "4")) || (nameArr[0] == "2" && ((nameArr[1] == "2" || nameArr[1] == "4") && $(ss1).attr('class').split(' ')[0] == "goat")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "4.0" && ((nameArr[0] == "4" && nameArr[1] == "1" || (nameArr[1] == "2" && $(ss1).attr('class').split(' ')[0] == "goat")) || (nameArr[0] == "3" && (nameArr[1] == "0" || nameArr[1] == "1")) || (nameArr[0] == "2" && ((nameArr[1] == "2" || nameArr[1] == "0") && $(ss1).attr('class').split(' ')[0] == "goat")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "4.4" && ((nameArr[0] == "3" && (nameArr[1] == "4" || nameArr[1] == "3")) || (nameArr[0] == "4" && (nameArr[1] == "3" || (nameArr[1] == "2" && $(ss1).attr('class').split(' ')[0] == "goat"))) || (nameArr[0] == "2" && ((nameArr[1] == "2" || nameArr[1] == "4") && $(ss1).attr('class').split(' ')[0] == "goat")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "0.1" && ((nameArr[0] == "0" && (nameArr[1] == "0" || nameArr[1] == "2" || (nameArr[1] == "3" &&  $(ss1).attr('class').split(' ')[0] == "goat"))) || (nameArr[0] == "1" && nameArr[1] == "1") || nameArr[0] == "2" && (nameArr[1] == "1" && $(ss1).attr('class').split(' ')[0] == "goat"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "0.3" && ((nameArr[0] == "0" && (nameArr[1] == "2" || nameArr[1] == "4" || (nameArr[1] == "1" &&  $(ss1).attr('class').split(' ')[0] == "goat"))) || (nameArr[0] == "1" && nameArr[1] == "3") || nameArr[0] == "2" && (nameArr[1] == "3" && $(ss1).attr('class').split(' ')[0] == "goat"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "1.0" && ((nameArr[1] == "0" && (nameArr[0] == "0" || nameArr[0] == "2")) || (nameArr[0] == "1" && (nameArr[1] == "1" || (nameArr[1] == "2" && $(ss1).attr('class').split(' ')[0] == "goat"))) || nameArr[0] == "3" && (nameArr[1] == "0" && $(ss1).attr('class').split(' ')[0] == "goat"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "1.4" && ((nameArr[1] == "4" && (nameArr[0] == "0" || nameArr[0] == "2")) || (nameArr[0] == "1" && (nameArr[1] == "3" || (nameArr[1] == "2" && $(ss1).attr('class').split(' ')[0] == "goat"))) || nameArr[0] == "3" && (nameArr[1] == "4" && $(ss1).attr('class').split(' ')[0] == "goat"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "3.0" && ((nameArr[1] == "0" && (nameArr[0] == "2" || nameArr[0] == "4")) || (nameArr[0] == "3" && (nameArr[1] == "1" || (nameArr[1] == "2" && $(ss1).attr('class').split(' ')[0] == "goat"))) || nameArr[0] == "1" && (nameArr[1] == "0" && $(ss1).attr('class').split(' ')[0] == "goat"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "3.4" && ((nameArr[1] == "4" && (nameArr[0] == "2" || nameArr[0] == "4")) || (nameArr[0] == "3" && (nameArr[1] == "3" || (nameArr[1] == "2" && $(ss1).attr('class').split(' ')[0] == "goat"))) || nameArr[0] == "1" && (nameArr[1] == "4" && $(ss1).attr('class').split(' ')[0] == "goat"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "4.1" && ((nameArr[0] == "4" && (nameArr[1] == "0" || nameArr[1] == "2" || (nameArr[1] == "3" && $(ss1).attr('class').split(' ')[0] == "goat"))) || (nameArr[0] == "3" && nameArr[1] == "1") || nameArr[0] == "2" && (nameArr[1] == "1" && $(ss1).attr('class').split(' ')[0] == "goat"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "4.3" && ((nameArr[0] == "4" && (nameArr[1] == "2" || nameArr[1] == "4" || (nameArr[1] == "1" && $(ss1).attr('class').split(' ')[0] == "goat"))) || (nameArr[0] == "3" && nameArr[1] == "3") || nameArr[0] == "2" && (nameArr[1] == "3" && $(ss1).attr('class').split(' ')[0] == "goat"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "1.2" && ((nameArr[0] == "1" && (nameArr[1] == "1" || nameArr[1] == "3" || ((nameArr[1] =="0" || nameArr[1] == "4") && $(ss1).attr('class').split(' ')[0] == "goat"))) || nameArr[1] == "2" && (nameArr[0] == "0" || nameArr[0] == "2") || (nameArr[0] == "3" && (nameArr[1] == "2" && $(ss1).attr('class').split(' ')[0] == "goat")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "2.1" && ((nameArr[0] == "2" && (nameArr[1] == "0" || nameArr[1] == "2" || (nameArr[1] == "3" && $(ss1).attr('class').split(' ')[0] == "goat"))) || nameArr[1] == "1" && (nameArr[0] == "1" || nameArr[0] == "3") || ((nameArr[0] == "0" || nameArr[0] == "4") && $(ss1).attr('class').split(' ')[0] == "goat"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "2.3" && ((nameArr[0] == "2" && (nameArr[1] == "2" || nameArr[1] == "4" || (nameArr[1] == "1" && $(ss1).attr('class').split(' ')[0] == "goat"))) || nameArr[1] == "3" && (nameArr[0] == "1" || nameArr[0] == "3" || ((nameArr[0] == "0" || nameArr[0] == "4") && $(ss1).attr('class').split(' ')[0] == "goat")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "3.2" && ((nameArr[0] == "3" && (nameArr[1] == "1" || nameArr[1] == "3" || ((nameArr[1] == "0" || nameArr[1] == "4") && $(ss1).attr('class').split(' ')[0] == "goat"))) || nameArr[1] == "2" && (nameArr[0] == "2" || nameArr[0] == "4") || (nameArr[0] == "1" && (nameArr[1] == "2" && $(ss1).attr('class').split(' ')[0] == "goat")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "0.2" && ((nameArr[0] == "0" && (nameArr[1] == "1" || nameArr[1] == "3" || (nameArr[1] == "0" || nameArr[1] == "4") && $(ss1).attr('class').split(' ')[0] == "goat")) || nameArr[0] == "1" && (nameArr[1] == "1" || nameArr[1] == "2" || nameArr[1] == "3") || (nameArr[0] == "2" && ((nameArr[1] == "0" || nameArr[1] == "4" || nameArr[1] == "2") && $(ss1).attr('class').split(' ')[0] == "goat")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "2.0" && ((nameArr[1] == "0" && (nameArr[0] == "1" || nameArr[0] == "3" || (nameArr[0] == "0" || nameArr[0] == "4") && $(ss1).attr('class').split(' ')[0] == "goat")) || nameArr[1] == "1" && (nameArr[0] == "1" || nameArr[0] == "2" || nameArr[0] == "3") || (nameArr[1] == "2" && ((nameArr[0] == "0" || nameArr[0] == "4" || nameArr[0] == "2") && $(ss1).attr('class').split(' ')[0] == "goat")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "2.4" && ((nameArr[1] == "4" && (nameArr[0] == "1" || nameArr[0] == "3" || ((nameArr[0] == "0" || nameArr[0] == "4") && $(ss1).attr('class').split(' ')[0] == "goat"))) || nameArr[1] == "3" && (nameArr[0] == "1" || nameArr[0] == "2" || nameArr[0] == "3") || (nameArr[1] == "2" && ((nameArr[0] == "0" || nameArr[0] == "4" || nameArr[0] == "2") && $(ss1).attr('class').split(' ')[0] == "goat")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position1 == "4.2" && ((nameArr[0] == "4" && (nameArr[1] == "1" || nameArr[1] == "3" || ((nameArr[1] == "0" || nameArr[1] == "4") && $(ss1).attr('class').split(' ')[0] == "goat"))) || nameArr[0] == "3" && (nameArr[1] == "1" || nameArr[1] == "2" || nameArr[1] == "3") || (nameArr[0] == "2" && ((nameArr[1] == "0" || nameArr[1] == "4" || nameArr[1] == "2") && $(ss1).attr('class').split(' ')[0] == "goat")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else{
                alert("Wrong move");
                delCheck =null;
            }
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

            else if(get_position == "1.2" && ((nameArr[0] == "1" && (nameArr[1] == "1" || nameArr[1] == "3")) || nameArr[1] == "2" && (nameArr[0] == "0" || nameArr[0] == "2"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "2.1" && ((nameArr[0] == "2" && (nameArr[1] == "0" || nameArr[1] == "2")) || nameArr[1] == "1" && (nameArr[0] == "1" || nameArr[0] == "3"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "2.3" && ((nameArr[0] == "2" && (nameArr[1] == "2" || nameArr[1] == "4")) || nameArr[1] == "3" && (nameArr[0] == "1" || nameArr[0] == "3"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "3.2" && ((nameArr[0] == "3" && (nameArr[1] == "1" || nameArr[1] == "3")) || nameArr[1] == "2" && (nameArr[0] == "2" || nameArr[0] == "4"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "0.2" && ((nameArr[0] == "0" && (nameArr[1] == "1" || nameArr[1] == "3")) || nameArr[0] == "1" && (nameArr[1] == "1" || nameArr[1] == "2" || nameArr[1] == "3"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "2.0" && ((nameArr[1] == "0" && (nameArr[0] == "1" || nameArr[0] == "3")) || nameArr[1] == "1" && (nameArr[0] == "1" || nameArr[0] == "2" || nameArr[0] == "3"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "2.4" && ((nameArr[1] == "4" && (nameArr[0] == "1" || nameArr[0] == "3")) || nameArr[1] == "3" && (nameArr[0] == "1" || nameArr[0] == "2" || nameArr[0] == "3"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "4.2" && ((nameArr[0] == "4" && (nameArr[1] == "1" || nameArr[1] == "3")) || nameArr[0] == "3" && (nameArr[1] == "1" || nameArr[1] == "2" || nameArr[1] == "3"))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else if(get_position == "2.2" && ((nameArr[0] == "1" && (nameArr[1] == "1" || nameArr[1] == "2"|| nameArr[1] == "3")) || (nameArr[0] == "2" && (nameArr[1] == "1" || nameArr[1] == "3")) || (nameArr[0] == "3" && (nameArr[1] == "1" || nameArr[1] == "2"|| nameArr[1] == "3")))){
                $('.'+get_name).css({'top':nameArr[0]*100-5+'px', 'left':nameArr[1]*100-5+'px'});
                $('.'+get_name).attr("data-position", nameArr[0]+'.'+nameArr[1]);
            }

            else{
                alert("Wrong move");
            }
        }

        if((get_name == "tiger1" || get_name == "tiger2") && get_position1 && delCheck != null){
            try{
                if($(ss1).attr('class').split(' ')[0] == "goat"){
                    var ddddd = $("[data-position='"+ss+"']")[1].remove();
                    console.log("Del "+ss);
                }
                
            }
            catch(err) {
                // break;
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
