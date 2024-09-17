#!/usr/bin/env node

import fs from "fs";

export function list(options: any) {
  const tasks = JSON.parse(fs.readFileSync("todo.json", "utf-8"));
  const taskId = options.id;

  const ongoing = tasks["ongoing"];

  console.log(ongoing[taskId]);
}
