#!/usr/bin/env node

import fs from "fs";

export function done(options: any) {
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
}
