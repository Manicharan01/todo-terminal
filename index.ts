import { Command } from "commander";
import fs from "fs";

const program = new Command();

const todo = program.command("todo");

todo
  .command("add")
  .option("-i --id [id]", "Id of the Task")
  .option("-t --title [title]", "Title of the Task")
  .option("-d --description [des]", "Description of the task")
  .option("-r --dueDate [due]", "Due Date of the task")
  .option("-p --priority [priority]", "Priority of the Task")
  .action((options) => {
    const todoId = options.id;
    const todolist = {
      _id: options.id,
      Title: options.title,
      Description: options.description,
      DueDate: options.dueDate,
      Priority: options.priority,
    };
    let data = JSON.parse(fs.readFileSync("todo.json", "utf-8"));
    const present = data["ongoing"];
    present[todoId] = todolist;
    data["ongoing"] = present;
    fs.writeFile("todo.json", JSON.stringify(data), (err) => {
      if (err) throw err;
    });
  });

todo
  .command("list")
  .option("-i --id [id]", "ID of the task")
  .action((options) => {
    const tasks = JSON.parse(fs.readFileSync("todo.json", "utf-8"));
    const taskId = options.id;

    const ongoing = tasks["ongoing"];

    console.log(ongoing[taskId]);
  });

todo.command("listall").action(() => {
  const tasks = JSON.parse(fs.readFileSync("todo.json", "utf-8"));
  console.log(tasks);
});

todo
  .command("edit")
  .option("-i --id [id]", "ID of the task")
  .option("-t --title [title]", "Title of the Task")
  .option("-d --description [des]", "Description of the task")
  .option("-r --dueDate [due]", "Due Date of the task")
  .option("-p --priority [priority]", "Priority of the Task")
  .action((options) => {
    const tasks = JSON.parse(fs.readFileSync("todo.json", "utf-8"));

    const taskId = options.id;

    const ongoing = tasks["ongoing"];

    let task = ongoing[taskId];

    if (options.title) {
      task.Title = options.title;
    }
    if (options.description) {
      task.Description = options.description;
    }
    if (options.dueDate) {
      task.DueDate = options.dueDate;
    }
    if (options.priority) {
      task.Priority = options.priority;
    }

    ongoing[taskId] = task;
    tasks["ongoing"] = ongoing;

    fs.writeFileSync("todo.json", JSON.stringify(tasks));
  });

todo
  .command("done")
  .option("-i --id [id]", "ID of the task")
  .action((options) => {
    const taskId = options.id;

    const tasks = JSON.parse(fs.readFileSync("todo.json", "utf-8"));

    const ongoing = tasks["ongoing"];

    const completed = tasks["completed"];

    const task = ongoing[taskId];

    completed[taskId] = task;

    delete ongoing[taskId];

    tasks["ongoing"] = ongoing;

    tasks["completed"] = completed;

    fs.writeFileSync("todo.json", JSON.stringify(tasks));
  });

program.parse(process.argv);
