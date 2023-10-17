function IsNaN(value) {
        if (typeof value === 'number' && value === value) {
        return false;
    }
   else {
       return true;
    }
}
console.log(IsNaN(7));



