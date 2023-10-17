function Pad(str = '', sym = '',num = 0, bool = true) {
    let rep = '';
    if (str.length < num) {
        rep = sym.repeat(1);
    }
    else {
        rep = sym.repeat(num)
    }
    if (bool){
    console.log(rep+str);
    return rep+str;
    } else {
    console.log(str+rep);
    return str+rep;
}
}
Pad('qwerty','$', 5, true)