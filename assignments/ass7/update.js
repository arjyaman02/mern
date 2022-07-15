const prompt = require('prompt-sync')();
const fs = require('fs');

function Item(id,itemname,quantity,price){
    this.id = id;
    this.itemname = itemname;   
    this.quantity = quantity;
    this.price = price;
}

exports.updateItem = (id)=>{
    let itemArr = JSON.parse(fs.readFileSync('shopping_list.json'));
    itemArr = itemArr.filter(item=>item.id != id);
    const itemname = prompt('Enter item name: ');
    const quantity = prompt('Enter item quantity: ');
    const price = prompt('Enter item price');

    const itemObj = new Item(id,itemname, quantity, price);
    itemArr.push(itemObj);
    fs.writeFile("shopping_list.json",JSON.stringify(itemArr),(err)=>
    {
        if(err)
            console.log('Something is wrong');
        else
            console.log('Item changed successfully!');

    })
}