import { createReadStream } from "fs";
import { join } from "path";
import { FILE_DIRECTORY, __dirname } from "./const.js";

const { stdout } = process;

const FILE_NAME = "fileToRead.txt";
const FILE_PATH = join(__dirname, FILE_DIRECTORY, FILE_NAME);

const read = async () => {
    const stream = createReadStream(FILE_PATH, "utf-8");

    let data = "";

    stream.on("data", chunk => {
        data = data + chunk;
    });
    stream.on("end", () => stdout.write(data));
    stream.on("error", error => console.log("Error: ", error.message));
};

await read();