import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { __dirname, FILE_DIRECTORY, FILE_TXT, FILE_GZ } from "./const.js";
import { pipeline } from "stream/promises";

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(join(__dirname, FILE_DIRECTORY, FILE_TXT));
    const destination = createWriteStream(join(__dirname, FILE_DIRECTORY, FILE_GZ));

    try {
        await pipeline(source, gzip, destination);
    } catch (error) {
        console.error(error.message);
    }
};

await compress();