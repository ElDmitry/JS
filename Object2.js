var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
};

let price = {
    allPrice: function() {
        let sum = 0;
        for (let value in services) {
            let price = parseFloat(services[value]);
            sum += price;
        }
        return sum;
    },

    minPrice: function() {
        let min = parseFloat(Object.values(services)[0]);

        for (let service in services) {
            let price = parseFloat(services[service]);
            if (price < min) {
                min = price;
            }
        }

        return min;
    },

    maxPrice: function() {
        let max = parseFloat(Object.values(services)[0]);

        for (let service in services) {
            let price = parseFloat(services[service]);
            if (price > max) {
                max = price;
            }
        }

        return max;
    }
};
services['Розбите скло'] = "400 uah"

console.log('Загальна сумма: ' + price.allPrice() + " грн");
console.log('Мінімальна сумма: ' + price.minPrice() + " грн");
console.log('Максимальна сумма: ' + price.maxPrice() + " грн");



