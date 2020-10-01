function myMove(){
    var elem=document.getElementById("myAnimation");
    var pos=0;
    var id=setInterval(frame, 10);
    function frame(){
        if (pos==349){
            // clearInterval(id);
            pos--;
            elem.style.top=pos-'px';
            elem.style.left=pos-'px';
        }
        else{
            pos++;
            elem.style.top=pos+'px';
            elem.style.left=pos+'px';
        }
    }
}

