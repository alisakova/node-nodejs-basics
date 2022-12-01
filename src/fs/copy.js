import { readdir, mkdir, copyFile } from "fs/promises";
import { join } from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const NEW_FILE_DIRECTORY = "files_copy";
const ERROR_MESSAGE = "FS operation failed";
const FILE_DIRECTORY = "files";
const DIRECTORY_PATH = join(__dirname, FILE_DIRECTORY);
const NEW_DIRECTORY_PATH = join(__dirname, NEW_FILE_DIRECTORY)

const copy = async () => {
    try {
        const files = await readdir(DIRECTORY_PATH);
        await mkdir(NEW_DIRECTORY_PATH);

        for (const file of files) {
            await copyFile(join(DIRECTORY_PATH, file), join(NEW_DIRECTORY_PATH, file));
        }
    } catch (error) {
        console.error(ERROR_MESSAGE);
    }
};

await copy();