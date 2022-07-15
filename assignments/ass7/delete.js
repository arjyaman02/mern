const prompt = require('prompt-sync')();
const fs = require('fs');

exports.deleteItem = (id)=>{
    let itemArr = JSON.parse(fs.readFileSync('shopping_list.json'));
    itemArr = itemArr.filter(item=>item.id != id);
    fs.writeFile("shopping_list.json",JSON.stringify(itemArr),(err)=>
    {
        if(err)
            console.log('Something is wrong');
        else
            console.log('Item deleted successfully!');

    })
}