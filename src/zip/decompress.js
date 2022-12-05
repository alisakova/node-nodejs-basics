import { createUnzip } from "node:zlib";
import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { __dirname, FILE_DIRECTORY, FILE_TXT, FILE_GZ } from "./const.js";
import { pipeline } from "stream/promises";

const decompress = async () => {
    const unzip = createUnzip();
    const source = createReadStream(join(__dirname, FILE_DIRECTORY, FILE_GZ));
    const destination = createWriteStream(join(__dirname, FILE_DIRECTORY, FILE_TXT));

    try {
        await pipeline(source, unzip, destination);
    } catch (error) {
        console.error(error.message);
    }
};

await decompress();