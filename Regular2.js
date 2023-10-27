var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },

];
let re = /^(\w+[.]?\w+)*@(gmail\.com|yahoo\.com)$/;
let paranoa = arr.filter(function(arr) {
    return re.test(arr.email);
});

console.log(paranoa);

