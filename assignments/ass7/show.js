const prompt = require('prompt-sync')();
const fs = require('fs');

exports.showItem = ()=>{
    let itemArr = JSON.parse(fs.readFileSync('shopping_list.json'));
    for(let i=0; i<itemArr.length; i++) {
        console.log(JSON.stringify(itemArr[i]));
    }
}