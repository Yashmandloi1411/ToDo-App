let contanier = document.querySelector('.container');

const inputBox = document.querySelector('#input-box');


const btn = document.querySelector('.btn');

var ul = document.querySelector('#list-container');

let li;

btn.addEventListener('click',()=>{
        let value = inputBox.value;

        if(value.trim() === ''){
           alert("You Must write Something");
        }

        else{
             li = document.createElement('li');
             li.textContent = value;
             ul.appendChild(li);

             let span =  document.createElement('span');
             span.innerHTML = "\u00d7";
             li.appendChild(span);
        }
        inputBox.value = '';
        saveData();

})


ul.addEventListener('click',function(e){
      if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
      }

      else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
      }
})


function saveData(){
    localStorage.setItem("data",ul.innerHTML);
}

// display data when we open the browser again
function showTask(){
    ul.innerHTML = localStorage.getItem("data");
}
showTask();
