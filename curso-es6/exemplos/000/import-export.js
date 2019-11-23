import { soma as somaAlias, sub } from "./funcoes";
import nomeQueQuizer from "./soma";

console.log(somaAlias(1, 2));
console.log(sub(4, 2));
console.log(nomeQueQuizer(10, 5));

import * as funcoes from "./funcoes";

console.log(funcoes);
console.log(funcoes.mult(5, 3));
