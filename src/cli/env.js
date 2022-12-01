import { argv } from "node:process";

const ENV_PREFIX = "RSS_";

const parseEnv = () => {
    const envs = Object.entries(process.env).reduce((result, [key, value]) => {
        if (key.includes(ENV_PREFIX)) {
            result.push(`${key}=${value}`);

            return result;
        }

        return result;
    }, []);

    console.log(envs.join("; "));
};

parseEnv();