let amount = 1;
let measure = 'km';
    switch (measure) {
        case 'kg':
            console.log(amount * 1000 + 'g');
            break;
        case 'h':
            console.log(amount * 60 + 'min');
            break;
        case 'km':
            console.log(amount * 1000 + 'm')
            break;
    }

