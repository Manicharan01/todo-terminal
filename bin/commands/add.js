#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
const fs_1 = __importDefault(require("fs"));
function add(options) {
    const todoId = options.id;
    const todolist = {
        _id: options.id,
        Title: options.title,
        Description: options.description,
        DueDate: options.dueDate,
        Priority: options.priority,
    };
    let data = JSON.parse(fs_1.default.readFileSync("todo.json", "utf-8"));
    const present = data["ongoing"];
    present[todoId] = todolist;
    data["ongoing"] = present;
    fs_1.default.writeFile("todo.json", JSON.stringify(data), (err) => {
        if (err)
            throw err;
    });
}
