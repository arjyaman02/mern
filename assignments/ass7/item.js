const prompt = require('prompt-sync')();
const fs = require('fs');

function Item(id,itemname,quantity,price){
    this.id = id;
    this.itemname = itemname;   
    this.quantity = quantity;
    this.price = price;
}

exports.addItem = ()=>{
    const howmanyitems = prompt('Enter how many items to be added');
    let itemArr=[];
    for(let i=0; i<howmanyitems;i++) {
        const id = prompt('Enter item id: ');
        const itemname = prompt('Enter item name: ');
        const quantity = prompt('Enter item quantity: ');
        const price = prompt('Enter item price: ');
        const item = new Item(id,itemname,quantity,price);
        itemArr.push(item);
    }
    fs.writeFile("shopping_list.json",JSON.stringify(itemArr),(err)=>
    {
        if(err)
            console.log('Something is wrong');
        else
            console.log('Item(s) added successfully!');

    })
    
}