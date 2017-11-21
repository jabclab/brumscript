import { toTranspile, validateSyntax } from '../utils';

const lexer = /^(?:([0-9]+) times: )?print "([a-zA-Z_ !]+)"\n$/;
validateSyntax(lexer, toTranspile);

const js = toTranspile.replace(lexer, (_, numIterations, msg) => `
   for (let i = 0; i < ${numIterations}; i++) {
     console.log('${msg}');
   }
`);

console.log(js);
