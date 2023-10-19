function IsNaN(value) {
    let a;
    if (typeof value === 'string') {
        a = value.trim();
    }
    else {
        a = value;
    }
    if (typeof a === 'string' && !+a && !a.includes(',')){
        return false;
    }
    if ((+value && value === value) || value === null) {
        return false;
    }
    else {
        return true;
    }
}


console.log(IsNaN(NaN));        // true
console.log(IsNaN(undefined));  // true
console.log(IsNaN({}));         // true
//
console.log(IsNaN(true));       // false
console.log(IsNaN(null));       // false
console.log(IsNaN(37));         // false
//
console.log(IsNaN("37"));       // false
console.log(IsNaN("37.37"));    // false
console.log(IsNaN(""));         // false
console.log(IsNaN(" "));        // false
console.log(IsNaN("37,5"));     // true



