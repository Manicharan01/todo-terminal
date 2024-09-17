#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = list;
const fs_1 = __importDefault(require("fs"));
function list(options) {
    const tasks = JSON.parse(fs_1.default.readFileSync("todo.json", "utf-8"));
    const taskId = options.id;
    const ongoing = tasks["ongoing"];
    console.log(ongoing[taskId]);
}
