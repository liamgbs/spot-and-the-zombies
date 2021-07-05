import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

process.stdin.setEncoding('ascii')

export const getKey = () => new Promise<string>(res => process.stdin.once('data', res))
export const close = () => rl.close();
export const clear = () => process.stdout.write("\u001b[2J\u001b[0;0H");

export const write = (output: string, colour: OutputColour = 'default') => process.stdout.write(`\x1b[${Colour[colour]}${output}\x1b[0m`);

type OutputColour = keyof typeof Colour;
//https://stackoverflow.com/a/41407246/11034096
enum Colour {
    default = '0m',
    green = '32m'
}