const prices: (number | string)[] = [1, 3, 2, 2, 2, 'as'];
prices.push(1);
prices.push('1');
console.log(prices);

// tuplas -> Array fuiertemente tipado
let user: [string, number];
user = ['nicobytes', 15];
const [username, age] = user; // desetructurar una tupla
console.log()
