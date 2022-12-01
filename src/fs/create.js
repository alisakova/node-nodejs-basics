import { writeFile } from "fs/promises";
import { join } from "path";
import { isExist } from "./isExist.js";
import { FILE_DIRECTORY, ERROR_MESSAGE, __dirname } from "./const.js";

const FILE_NAME = "fresh.txt";
const CONTENT = "I am fresh and young";
const FILE_PATH = join(__dirname, FILE_DIRECTORY, FILE_NAME);

const create = async () => {
    try {
        const isFileExist = await isExist(FILE_PATH);

        if (isFileExist) {
            throw new Error(ERROR_MESSAGE);
        }

        await writeFile(join(__dirname, FILE_DIRECTORY, FILE_NAME), CONTENT);
    } catch (error) {
        console.error(error.message);
    }
};

await create();