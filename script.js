let addTodo = document.getElementById('add-todo');
let todoContainer = document.querySelector('.todo-list-container')
let input = document.getElementById('todo-input');



let todoList = [
    {title:"cool",status:"Pending",mark:"Mark Completed"},
]


// -------------------------------------create task card --------------------------------

function createCard()
{
    todoContainer.innerHTML="";

    todoList.map((item,index)=>{

        let cls;
        if(item.status=="Pending")
        {
            cls = "green";
        }
        else{
            cls="yellow"
        }
        let todoCard = document.createElement('div');
    
        todoCard.className = `todo-card`;
    
        todoCard.innerHTML = ` <p>${item.title}</p>
        <p>status: ${item.status}</p>
        <div>
    
            <button id="remove" onclick=remove(${index})>remove</button>
            <button id="mark-complited" class="${cls}" onclick=mark(${index})>${item.mark}</button>
            <button id="edit" onclick=edit(${index})>edit task</button>
        </div>`;
        todoContainer.appendChild(todoCard);
    })
}
createCard();

// ---------------------------------------- add new task in todo list-------------------------

addTodo.addEventListener('click',()=>{
    
    console.log("asjdhfkasd");   
    todoList.push({title: input.value, status:"Pending", mark:"Mark Completed"})
    createCard()
    input.value = '';
    
    
})


// ---------------------------------------- marking in todo list-------------------------

function mark(index)
{
    todoList.map((item,i)=>{
        
        if(i==index)
        {
            if(item.mark=="Mark Pending")
            {
                item.mark = "Mark Completed";
                item.status = "Pending";
                
            }
            else{
                item.mark = "Mark Pending";
                item.status = "Completed";
            }
        }
    })
    createCard();

}

// -------------------------------------removing in todo list-----------------------

function remove(index)
{
    todoList = todoList.filter((item,i)=>{
        return i!=index;
    })
    createCard();
}



// -------------------------------------  edit todo list -------------------


let editIndex ;

function edit(index)
{
    document.querySelector('.popup').style.display="block";

    console.log("index  ",index);
    editIndex = index;
    
}


document.getElementById('update').addEventListener('click', ()=>{

    let editInput=  document.getElementById('edit-input');
    todoList[editIndex].title = editInput.value;
    document.querySelector('.popup').style.display="none";
    editInput.value = "";
    createCard();
    
})


document.getElementById('cancle').addEventListener('click',()=>{
    document.querySelector('.popup').style.display="none";

})