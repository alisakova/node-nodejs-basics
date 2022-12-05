import { fork } from "child_process";
import { fileURLToPath } from "url";
import { join } from "path";

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const FILE_PATH = join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
    // Write your code here
    fork(FILE_PATH, args);
};

spawnChildProcess();