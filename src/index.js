const testTasks = [
    {
        date: "Thu Jul 30 2020 20:08:50 GMT+0300 (Восточная Европа, летнее время)",
        id: "1596128930806",
        name: "Test1",
        status: "Completed",
        text: "Olo"
    },
    {
        date: "Thu Jul 30 2020 20:08:50 GMT+0300 (Восточная Европа, летнее время)",
        id: "1596128930807",
        name: "Test2",
        status: "Completed",
        text: "oLo"
    },
    {
        date: "Thu Jul 30 2020 20:08:50 GMT+0300 (Восточная Европа, летнее время)",
        id: "1596128930808",
        name: "Test2",
        status: "New task",
        text: "oLo"
    },
]
const toDoList = {
    tasks: testTasks,
    addTask () {
        const newTask = {
            id: Date.now().toString(),
            date: new Date().toString(),
            status: confirm('Is task completed?') ? 'Completed' : 'New task' ,
            name: prompt('Add name'),
            text: prompt('Add some text')
        }
        if(!this.checkTask(newTask)) {
            this.tasks.push(newTask)
        }else {
            return 'Task already exist'
        }
        return "added"
    },
    findTaskIndexById(id) {
        return this.tasks.findIndex(function (element) {
            return element.id === id;
        })
    },
    deleteTask (id) {
        const taskIndex = this.findTaskIndexById(id)
        if(taskIndex >= 0) {
            if(confirm ('Are you sure about that?')) {
                this.tasks.splice(taskIndex, 1)
                return this.tasks
            }else { 
                return 'You do not want delete this task'
            }
        }else {
            return 'Id not found'
        }
    },
    editTask(id) {
        const taskIndex = this.findTaskIndexById(id)
        if(taskIndex >= 0) {
            const task = this.tasks[taskIndex],
            status = prompt('New task status', task.status),
            name = prompt('New task name', task.name),
            text = prompt('New task text', task.text)
            return task
        } else {
            return 'Id not found'
        }
    },
    showTasksList(){
        const completedTask = this.tasks.filter(element => element.status === 'Completed')
        const uncompletedTask = this.tasks.filter(element => element.status === 'New task')
        return {
            count: this.tasks.length,
            completedTask,
            uncompletedTask
        }
    },
    checkTask(task) {
        return this.tasks.find(element => element.name + element.text === task.name + task.text)
    }
}