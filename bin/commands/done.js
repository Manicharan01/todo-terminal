#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.done = done;
const fs_1 = __importDefault(require("fs"));
function done(options) {
    const taskId = options.id;
    const tasks = JSON.parse(fs_1.default.readFileSync("todo.json", "utf-8"));
    const ongoing = tasks["ongoing"];
    const completed = tasks["completed"];
    const task = ongoing[taskId];
    completed[taskId] = task;
    delete ongoing[taskId];
    tasks["ongoing"] = ongoing;
    tasks["completed"] = completed;
    fs_1.default.writeFileSync("todo.json", JSON.stringify(tasks));
}
