function IsNaN(value)
{
    return !(typeof (+value) === 'number' && isFinite(value));
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
