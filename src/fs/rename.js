import { rename as fsRename } from "fs/promises";
import path from "path";
import { isExist } from "./isExist.js";
import { FILE_DIRECTORY, ERROR_MESSAGE, __dirname } from "./const.js";

const OLD_FILE_NAME = "wrongFilename.txt";
const NEW_FILE_NAME = "properFilename.md";
const OLD_FILE_PATH = path.join(__dirname, FILE_DIRECTORY, OLD_FILE_NAME);
const NEW_FILE_PATH = path.join(__dirname, FILE_DIRECTORY, NEW_FILE_NAME)

const rename = async () => {
    try {
        const isNewFileExist = await isExist(NEW_FILE_PATH);
        const isOldFileExist = await isExist(OLD_FILE_PATH);

        if (isNewFileExist || !isOldFileExist) {
            throw new Error(ERROR_MESSAGE)
        }

        await fsRename(OLD_FILE_PATH, NEW_FILE_PATH);
    } catch (error) {
        console.error(error.message);
    }
};

await rename();