import os from "os";
import { Worker } from "worker_threads";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const CPUS_NUMBER = os.cpus().length;
const FILE_NAME = "worker.js";
const PATH_TO_FILE = join(__dirname, FILE_NAME);
const START_NUMBER = 10;

const performCalculations = async () => {
    const threads = new Set();

    for (let i = 0; i < CPUS_NUMBER; i++) {
        threads.add(new Promise((resolve, reject) => {
            const worker = new Worker(PATH_TO_FILE, { workerData: START_NUMBER + i });
            worker.on("message", resolve);
            worker.on("error", reject);
        }));
    }

    Promise.allSettled(threads)
        .then((responses => responses.map(response => ({
        status: response.status === "fulfilled" ? "resolved" : "error",
        data: response.value || null,
    }))))
        .then(result => console.log(result));
};

await performCalculations();