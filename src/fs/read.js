import { readFile } from "fs/promises";
import { join } from "path";
import { isExist } from "./isExist.js";
import { FILE_DIRECTORY, ERROR_MESSAGE, __dirname } from "./const.js";

const FILE_TO_READ = "fileToRead.txt";
const FILE_PATH = join(__dirname, FILE_DIRECTORY, FILE_TO_READ);

const read = async () => {
    try {
        const isFileExist = await isExist(FILE_PATH);

        if (!isFileExist) {
            throw new Error(ERROR_MESSAGE);
        }

        const fileContent = await readFile(FILE_PATH);

        console.log(fileContent.toString());
    } catch (error) {
        console.error(error.message);
    }
};

await read();