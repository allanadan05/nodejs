const greeter = (name = 'user', {label, stock} = {}) => { //providing default param values avoids error
    console.log('Hello ' + name);
    console.log(label, stock);
}

greeter('Dan');
