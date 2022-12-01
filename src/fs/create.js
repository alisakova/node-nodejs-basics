import { access, writeFile } from "fs/promises";
import { join } from "path";
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const FILE_NAME = "fresh.txt";
const CONTENT = "I am fresh and young";
const ERROR_MESSAGE = "FS operation failed";
const FILE_DIRECTORY = "files";
const FILE_PATH = join(__dirname, FILE_DIRECTORY, FILE_NAME);

const isExist = async (filePath) => {
    try {
        await access(filePath);

        return true;
    } catch (error) {
        return false;
    }
}

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