import { rm } from "fs/promises";
import path from "path";
import { isExist } from "./isExist.js";
import { FILE_DIRECTORY, ERROR_MESSAGE, __dirname } from "./const.js";

const FILE_TO_DELETE = "fileToRemove.txt";
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