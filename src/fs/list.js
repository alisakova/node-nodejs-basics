import { readdir } from "fs/promises";
import { join } from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const ERROR_MESSAGE = "FS operation failed";
const FILE_DIRECTORY = "files";
const DIRECTORY_PATH = join(__dirname, FILE_DIRECTORY);

const list = async () => {
    try {
        const files = await readdir(DIRECTORY_PATH);

        for (const file of files) {
            console.log(file);
        }
    } catch (error) {
        console.error(ERROR_MESSAGE);
    }
};

await list();