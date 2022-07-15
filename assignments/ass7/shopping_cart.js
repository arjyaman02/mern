const {addItem} = require('./item');
const {updateItem} = require('./update');
const {deleteItem} = require('./delete');
const {showItem} = require('./show');
const {totalPrice} = require('./total');

const prompt = require('prompt-sync')();
console.log('1.add item to the list\r\n2.update item from the list\r\n3.delete item from the list\r\n4.show the list\r\n5.Total price')
const operation = prompt('Which operation do you want?');
switch(operation){
    case '1':
        addItem();
        break;
    case '2':
        let id = prompt('Enter the id you want to update: ');
        updateItem(id);
        break;
    case '3':
        let id1 = prompt('Enter the id you want to delete: ');
        deleteItem(id1);
        break;
    case '4':
        showItem();
        break;
    case '5':
        totalPrice();
        break;
}
