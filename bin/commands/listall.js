#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listall = listall;
const fs_1 = __importDefault(require("fs"));
function listall() {
    const tasks = JSON.parse(fs_1.default.readFileSync("todo.json", "utf-8"));
    console.log(tasks);
}
