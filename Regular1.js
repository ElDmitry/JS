let str = 'Asfdasf fasfasf dfhfdgahdh adffa'
let re = /[^aA]{6,}/;
let res = str.match(re);
console.log(re.test(str))
console.log(str.search(re))
