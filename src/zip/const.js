import { fileURLToPath } from "url";

export const FILE_DIRECTORY = "files";
export const FILE_TXT = "fileToCompress.txt";
export const FILE_GZ = "archive.gz";

export const __dirname = fileURLToPath(new URL('.', import.meta.url));