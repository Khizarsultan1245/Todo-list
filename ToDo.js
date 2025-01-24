



function addlist(){
    let input = document.getElementById("text-input").value;
let showresult = document.getElementById("list");
localStorage.getItem("Data");
let data=[input];

    let text = input;
    if(text ===""){
        alert("Please enter something");
    }else{
        let li = document.createElement('li');
        li.innerHTML = text;
        li.style.listStyle.none;
        showresult.insertBefore(li,showresult.childNodes[0]);
        localStorage.setItem("Data",JSON.stringify(data));
        input.value = "";

        let delBtn = document.createElement("button");
        delBtn.style.color.red;
        delBtn.classList.add("fas-fa-trash");
        li.appendChild(delBtn);
         delBtn.addEventListener('click', e =>{
            li.parentNode.removeChild(li);
            localStorage.removeItem("Data");
         });
    }

showresult.addEventListener('click',e=>{
    if(e.target.tagName == 'li'){
        e.target.classList.toggle('checked');
    }
})
}

   