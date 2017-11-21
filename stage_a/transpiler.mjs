import { toTranspile, validateSyntax } from '../utils';

const lexer = /^print ([a-z_]+)\n$/;
validateSyntax(lexer, toTranspile);

const js = toTranspile.replace(lexer, (_, msg) => `console.log('${msg}')`);

console.log(js);
