#!/usr/bin/env node

import fs from "fs";

export function add(options: any) {
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
}
