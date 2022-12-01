import { readdir, mkdir, copyFile } from "fs/promises";
import { join } from "path";
import { isExist } from "./isExist.js";
import { FILE_DIRECTORY, ERROR_MESSAGE, __dirname } from "./const.js";

const NEW_FILE_DIRECTORY = "files_copy";
const DIRECTORY_PATH = join(__dirname, FILE_DIRECTORY);
const NEW_DIRECTORY_PATH = join(__dirname, NEW_FILE_DIRECTORY);

const copy = async () => {
    try {
        const isOldDirectoryExist = await isExist(DIRECTORY_PATH);
        const isNewDirectoryExist = await isExist(NEW_DIRECTORY_PATH);

        if (isNewDirectoryExist || !isOldDirectoryExist) {
            throw new Error(ERROR_MESSAGE);
        }

        const files = await readdir(DIRECTORY_PATH);
        await mkdir(NEW_DIRECTORY_PATH);

        for (const file of files) {
            await copyFile(join(DIRECTORY_PATH, file), join(NEW_DIRECTORY_PATH, file));
        }
    } catch (error) {
        console.error(error.message);
    }
};

await copy();