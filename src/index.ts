#!/usr/bin/env node

import { Command } from "commander";
import { add } from "./commands/add";
import { list } from "./commands/list";
import { listall } from "./commands/listall";
import { edit } from "./commands/edit";
import { done } from "./commands/done";

const program = new Command();

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
  .action(add);

program.command("list").option("-i --id [id]", "ID of the task").action(list);

program.command("listall").action(listall);

program
  .command("edit")
  .option("-i --id [id]", "ID of the task")
  .option("-t --title [title]", "Title of the Task")
  .option("-d --description [des]", "Description of the task")
  .option("-r --dueDate [due]", "Due Date of the task")
  .option("-p --priority [priority]", "Priority of the Task")
  .action(edit);

program.command("done").option("-i --id [id]", "ID of the task").action(done);

program.parse(process.argv);
