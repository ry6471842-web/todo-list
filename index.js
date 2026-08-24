const todoList = [{
    name: 'wash dishes',
    dueDate: '22-08-2026'
 }, {
    name: 'watch youtube',
    dueDate:'22-08-2026'
}];
renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        const { name, dueDate } = todoObject;
        // const  dueDate = todoObject.dueDate;
        // const { dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div> ${dueDate}</div>      
            <button class="delbtn" onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            ">Delete</button>    
        `;

        todoListHTML += html;

    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addTodo() {    
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;


    todoList.push({
        // name: name,
        // dueDate:  dueDate
        name,
        dueDate
});


    inputElement.value= '';
    renderTodoList();

};
