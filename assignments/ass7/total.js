const prompt = require('prompt-sync')();
const fs = require('fs');

exports.totalPrice = ()=>{
    let total=0;
    let itemArr = JSON.parse(fs.readFileSync('shopping_list.json'));
    for(let i=0; i<itemArr.length; i++) {
        total=total+ itemArr[i].price*itemArr[i].quantity;
    }
    console.log(total);
}