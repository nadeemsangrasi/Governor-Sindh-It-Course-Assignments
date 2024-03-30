#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class MyTodo {
    todos = [];
    async addTodo() {
        let flage = true;
        while (flage) {
            let addList = await inquirer.prompt([{ name: "todo", type: "input", message: chalk.bold("What do you want to add in your todo") }]);
            if (addList.todo !== "") {
                this.todos.push(addList.todo);
                console.log(chalk.yellow("Task added successfully"));
                let addMore = await inquirer.prompt([{ name: "more", type: "confirm", message: chalk.bold("Do you want to add more") }]);
                flage = addMore.more;
            }
            else {
                console.log(chalk.red("your input is empty"));
                flage = false;
            }
        }
    }
    viewTasks() {
        let todoList = this.todos;
        if (todoList.length !== 0) {
            console.log(chalk.green("Your added tasks"));
            for (let i = 0; i < todoList.length; i++) {
                console.log(chalk.yellow(`${i + 1} : ${todoList[i]}`));
            }
        }
        else {
            console.log(chalk.red("Please add task first"));
        }
    }
    async updateTask() {
        let todoList = this.todos;
        if (todoList.length !== 0) {
            console.log(chalk.green("select which task do you want to update"));
            for (let i = 0; i < todoList.length; i++) {
                console.log(chalk.bold(`${i + 1} : ${todoList[i]}`));
            }
            let toUpdate = await inquirer.prompt([{ name: "index", type: "number", message: "Enter task number to update" }]);
            if (toUpdate.index !== "" && !Number.isNaN(toUpdate.index) && toUpdate.index !== -1 && toUpdate.index <= todoList.length) {
                let newTask = await inquirer.prompt([{ name: "task", message: "Enter new task name ", type: "input" }]);
                todoList[toUpdate.index - 1] = newTask.task;
                console.log(chalk.yellow("Task updated successfully"));
            }
            else {
                console.log(chalk.red("Please add valid input"));
            }
        }
        else {
            console.log(chalk.red("Please add task first"));
        }
    }
    async removeTask() {
        let todoList = this.todos;
        if (todoList.length !== 0) {
            console.log(chalk.green("select which task do you want to delete"));
            for (let i = 0; i < todoList.length; i++) {
                console.log(chalk.bold(`${i + 1} : ${todoList[i]}`));
            }
            let toDelete = await inquirer.prompt([{ name: "index", type: "number", message: "Enter task number to delete" }]);
            if (toDelete.index !== "" && !Number.isNaN(toDelete.index) && toDelete.index !== -1 && toDelete.index <= todoList.length) {
                todoList.splice(toDelete.index - 1, 1);
                console.log(chalk.yellow("Task deleted successfully"));
            }
            else {
                console.log(chalk.red("Please add valid input"));
            }
        }
        else {
            console.log(chalk.red("Please add task first"));
        }
    }
    async myTodoMain() {
        let condition = true;
        while (condition) {
            let userAnswer = await inquirer.prompt([{ name: "answer", type: "list", message: "Select your desired option", choices: ["Add tasks", "View tasks", "Update task", "Remove task", "Quit"] }]);
            switch (userAnswer.answer) {
                case "Add tasks":
                    await this.addTodo();
                    break;
                case "View tasks":
                    this.viewTasks();
                    break;
                case "Update task":
                    await this.updateTask();
                    break;
                case "Remove task":
                    await this.removeTask();
                    break;
                case "Quit":
                    console.log(chalk.yellow("bye bye have a nice day"));
                    condition = false;
                default:
                    break;
            }
        }
    }
}
let myTodo = new MyTodo();
myTodo.myTodoMain();
