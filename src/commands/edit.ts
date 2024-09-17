#!/usr/bin/env node

import fs from "fs";

export function edit(options: any) {
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
}
