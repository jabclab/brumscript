import { toTranspile as toFormat, validateSyntax } from '../utils';
import { lexer } from './stage_c_utils';
// ----------------------------------

validateSyntax(lexer, toFormat);

const formattedBS = toFormat.replace(
    lexer,
    (_, numIterations, msg) => `${numIterations} times: print "${msg}"`
);

console.log(formattedBS);
