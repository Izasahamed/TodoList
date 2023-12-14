
function item(){

let check=document.getElementsByClassName("check");

let input=document.getElementById("inputText");

let list=document.getElementById("listing");


if(input.value==""){
   alert("pleae enter text");
}
else{
        let div=document.createElement('div');

        div.className="listitems";
    
        let li=document.createElement('li');
    
        li.textContent=input.value;
        
        let btn=document.createElement('button');
    
        btn.className="btn btn-danger btnStyle";
    
        btn.textContent="x";
    
        div.append(li,btn);
    
        list.append(div)
    
        btn.addEventListener("click",(e)=>{
             let existing=e.target.parentNode;
             existing.remove();
        })
   } 
input.value="";

}


 


    

  

