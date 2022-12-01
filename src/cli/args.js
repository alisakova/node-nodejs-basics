const parseArgs = () => {
    const [first, second, ...rest] = process.argv;

    const result = rest.reduce((acc, value, index) => {
        if (value.includes("--")) {
            acc.push(value, " is ");

            return acc;
        }

        acc.push(value, index === rest.length - 1 ? "" : ", ");

        return acc;
    }, []);

    console.log(result.join(""));
};

parseArgs();