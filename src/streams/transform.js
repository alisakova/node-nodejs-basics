import { pipeline } from "stream/promises";
import { Transform } from "stream";

const { stdin, stdout } = process;

const transform = async () => {
    const transform = new Transform({
        transform(chunk, encoding, callback) {
            const stringChunk = chunk.toString().trim();
            const reversedString = stringChunk.split("").reverse().join("");

            callback(null, reversedString + "\n");
        }
    });

    try {
        await pipeline(stdin, transform, stdout);
    } catch (error) {
        console.error(error.message);
    }
};

await transform();