import fs from 'fs';

const toTranspile = (() => {
    const args = process.argv;

    if (args.length !== 3) {
        throw new Error('Invalid call');
    }

    const fileToTranspile = args.pop();
    return fs.readFileSync(fileToTranspile, 'utf8');
})();

const validateSyntax = (pattern, code) => {
    if (!code.match(pattern)) {
        throw new Error('Invalid BrumScript');
    }
};

export { toTranspile, validateSyntax };
