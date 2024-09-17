#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const add_1 = require("./commands/add");
const list_1 = require("./commands/list");
const listall_1 = require("./commands/listall");
const edit_1 = require("./commands/edit");
const done_1 = require("./commands/done");
const program = new commander_1.Command();
program
    .name("todo")
    .description("Add, List, Edit, Delete your tasks from Terminal")
    .version("2.3.0");
program
    .command("add")
    .option("-i --id [id]", "Id of the Task")
    .option("-t --title [title]", "Title of the Task")
    .option("-d --description [des]", "Description of the task")
    .option("-r --dueDate [due]", "Due Date of the task")
    .option("-p --priority [priority]", "Priority of the Task")
    .action(add_1.add);
program.command("list").option("-i --id [id]", "ID of the task").action(list_1.list);
program.command("listall").action(listall_1.listall);
program
    .command("edit")
    .option("-i --id [id]", "ID of the task")
    .option("-t --title [title]", "Title of the Task")
    .option("-d --description [des]", "Description of the task")
    .option("-r --dueDate [due]", "Due Date of the task")
    .option("-p --priority [priority]", "Priority of the Task")
    .action(edit_1.edit);
program.command("done").option("-i --id [id]", "ID of the task").action(done_1.done);
program.parse(process.argv);
