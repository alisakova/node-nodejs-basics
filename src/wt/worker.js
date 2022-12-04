import { Worker, isMainThread, parentPort, workerData } from "worker_threads";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    if (isMainThread) {
        const worker = new Worker(__filename, { workerData: 7 });
        worker.on("message", (message) => { console.log(message); });
    } else {
        const result = nthFibonacci(workerData);
        parentPort.postMessage(result);
    }
};

sendResult();