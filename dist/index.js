"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
program
    .option("-f, --first <VALUE>", "First input")
    .option("-s, --second <VALUE>", "Second Input");
program.parse(process.argv);
const option = program.opts();
if (option.first && option.second) {
    console.log(`${option.first} ${option.second}`);
}
