function generator(isAlphabet=true, isCharacter=false, isNumber=false, length) {
    let result ='';
    let mainStr = ''
    if (isAlphabet) mainStr += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (isCharacter) mainStr += '!@#$%^&*_-~`';
    if (isNumber) mainStr += '0123456789';

    for (let i = 0; i< length; i++) {
        result += mainStr.charAt(Math.floor(Math.random() * mainStr.length - 1))
    }



    return result;
}

console.log(generator(true, true, true, 8));