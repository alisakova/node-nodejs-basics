import { readFile } from "fs/promises";
import { join } from "path";
import url from "url";
import { isExist } from "./isExist.js";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const FILE_TO_READ = "fileToRead.txt";
const ERROR_MESSAGE = "FS operation failed";
const FILE_DIRECTORY = "files";
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