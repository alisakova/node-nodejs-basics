import { rm } from "fs/promises";
import path from "path";
import url from "url";
import { isExist } from "./isExist.js";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const FILE_TO_DELETE = "fileToRemove.txt";
const ERROR_MESSAGE = "FS operation failed";
const FILE_DIRECTORY = "files";
const FILE_PATH = path.join(__dirname, FILE_DIRECTORY, FILE_TO_DELETE);

const remove = async () => {
    try {
        const isFileExist = await isExist(FILE_PATH);

        if (!isFileExist) {
            throw new Error(ERROR_MESSAGE);
        }

        await rm(FILE_PATH);
    } catch (error) {
        console.error(error.message);
    }
};

await remove();