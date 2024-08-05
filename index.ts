import { Command } from "commander";

const program = new Command();

program
  .option("-f, --first <VALUE>", "First input")
  .option("-s, --second <VALUE>", "Second Input");

program.parse(process.argv);

const option = program.opts();

if (option.first && option.second) {
  console.log(`${option.first} ${option.second}`);
}
