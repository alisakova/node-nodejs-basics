import { createHash } from "node:crypto";
import { readFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const FILE_TO_READ = "fileToCalculateHashFor.txt";
const FILE_DIRECTORY = "files";
const FILE_PATH = join(__dirname, FILE_DIRECTORY , FILE_TO_READ);
const ALGORITHM = "sha256";
const ENCODING = "hex";

const hashContent = (content) => {
    return new Promise((resolve) =>
        setTimeout(
            () => resolve(createHash(ALGORITHM).update(content).digest(ENCODING)),
            0
        ));
}

const calculateHash = async () => {
    try {
        const content = await readFile(FILE_PATH);
        const hash = await hashContent(content);

        console.log(hash);
    } catch (error) {
        console.error(error.message);
    }

};

await calculateHash();