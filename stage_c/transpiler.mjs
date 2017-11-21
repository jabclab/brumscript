import { toTranspile as toFormat, validateSyntax } from '../utils';
import { lexer } from './stage_c_utils';

validateSyntax(lexer, toFormat);

const js = toFormat.replace(lexer, (_, numIterations, msg) => `
   for (let i = 0; i < ${numIterations}; i++) {
     console.log('${msg.replace(/'/, '\\\'')}');
   }
`);

console.log(js);
