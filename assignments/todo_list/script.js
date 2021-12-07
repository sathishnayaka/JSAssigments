var input=document.getElementsByTagName("input")[0] ;
var submit1=document.getElementsByTagName("button")[0];
var todo=document.getElementsByClassName("todos")[0];
var count=0;
submit1.onclick=function() {
    if (input.value===""){
        alert("please enter the content")
    }else{
        var para=document.createElement('p');
        var attr=document.createAttribute("key");
        attr.value=count;
        para.setAttributeNode(attr);
        para.innerHTML=input.value;
        todo.appendChild(para);
        input.value="";
        para.onclick=function(){
            todo.removeChild(para);
        }
        count+=1;
    }
}
