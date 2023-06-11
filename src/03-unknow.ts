let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = [];
anyVar = 1;
anyVar = {};

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.toUpperCase();

let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = [];
unknowVar = 1;
unknowVar = {};

// unknowVar.doSomething();
// unknowVar.toUpperCase();

// verificacion de type
if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase;
}

if (typeof unknowVar === 'boolean') {
  let isNew2: boolean = unknowVar
}

const parce = (str: string): unknown => {
  return JSON.parse(str)
}
