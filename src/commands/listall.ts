#!/usr/bin/env node

import fs from "fs";

export function listall() {
  const tasks = JSON.parse(fs.readFileSync("todo.json", "utf-8"));
  console.log(tasks);
}
