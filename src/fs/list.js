import { readdir } from "fs/promises";
import { join } from "path";
import { isExist } from "./isExist.js";
import { FILE_DIRECTORY, ERROR_MESSAGE, __dirname } from "./const.js";

const DIRECTORY_PATH = join(__dirname, FILE_DIRECTORY);

const list = async () => {
    try {
        const isDirectoryExist = await isExist(DIRECTORY_PATH);

        if (!isDirectoryExist) {
            throw new Error(ERROR_MESSAGE);
        }

        const files = await readdir(DIRECTORY_PATH);

        console.log(files);
    } catch (error) {
        console.error(error.message);
    }
};

await list();