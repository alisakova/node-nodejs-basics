import { fileURLToPath } from "url";

export const ERROR_MESSAGE = "FS operation failed";
export const FILE_DIRECTORY = "files";

export const __dirname = fileURLToPath(new URL('.', import.meta.url));