import { createWriteStream } from "fs";
import { join } from "path";
import { __dirname, FILE_DIRECTORY } from "./const.js";

const { stdin } = process;

const FILE_NAME = "fileToWrite.txt";
const FILE_PATH = join(__dirname, FILE_DIRECTORY, FILE_NAME);

const write = async () => {
    const output = createWriteStream(FILE_PATH, "utf-8");

    stdin.on("data", data => {
        output.write(data.toString());
    });
};

await write();