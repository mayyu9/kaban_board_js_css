const tasks = document.querySelectorAll('.task');
const boards = document.querySelectorAll(".board");
// tasks.forEach('dragstart', () => {

//     tasks.classList.add('is-dragging');
// })

// tasks.forEach('dragend', () => {
//     tasks.classList.remove('is-draggiing');
// })

tasks.forEach(task => {
    task.addEventListener('dragstart', (e) =>{
        task.classList.add('is-dragging');
        // console.log('dragging start: ', task);
    });

    task.addEventListener('dragend', (e) =>{
        task.classList.remove('is-dragging');
        // console.log('dragging start: ', task);
    })
})

boards.forEach(board => {
    board.addEventListener("dragover", () => {
        // whenever a task is dragged, we add is-dragging for that specific class.
        // fetch the task that is getting dragged.
        const task = document.querySelector('.is-dragging');
        board.appendChild(task);
    })
})