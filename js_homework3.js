let age = prompt('Вкажіть ваш вік');
if (age % 10 === 0 || age % 10 >= 5 && age % 10 <= 20 || age === 0){
    console.log(age + 'років')
}
else if (age % 10 === 1) {
    console.log(age + 'рік')
}
else if (age % 10 >= 2 && age % 10 <= 4) {
    console.log(age + 'роки')
}
else if (age < 0)
    console.log('ERROR')




