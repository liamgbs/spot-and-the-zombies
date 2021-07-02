import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

process.stdin.setEncoding('ascii')


export const getInput = (question: string) => new Promise(res => rl.question(question, res));
export const getKey = () => new Promise<string>(res => process.stdin.once('data', res))
export const write = (output: string) => rl.write(output);
export const close = () => rl.close();
export const clear = (n: any) => process.stdout.clearLine(n);

