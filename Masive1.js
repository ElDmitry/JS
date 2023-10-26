let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let copyArr = arr;
function myBlend() {
    copyArr = copyArr.sort(() => Math.random() - 0.5)
    return copyArr;
}
console.log(myBlend())
