let cust=[];
for(let i=0; i<2;i++){
    //let name=prompt(`Enter the name of the customer${i+1} `);
    //let email=prompt(`Enter the email of the customer${i+1} `);
    //let phone=prompt(`Enter the phone number of the customer${i+1} `);
    let no_of_shopped=Number(prompt(`Enter the number of times the customer${i+1} shopped`));
    let purchased_history=[];
    for(let j=0;j<no_of_shopped;j++) {
        purchased_date=prompt(`Enter the purchase date of the customer${i+1} `);
        n=Number(prompt(`Enter the number of the items purchased on ${purchased_date}`));
        let item_purchased=[];
        for(let l=0;l<n;l++) {
            //product_name=prompt(`Enter the product name of the item_purchased`);
            let product_price=Number(prompt(`Enter the product price of the ${product_name}`));
            let item= {
                //product_name ,
                product_price ,   
            }
            item_purchased.push(item);
        }
        let purchase_hist={
            purchased_date,
            item_purchased,
        }
        purchased_history.push(purchase_hist);   
    }
    let customer={
        //name,
        //email,
        //phone,
        no_of_shopped,
        purchased_history,
        total_purchase:function(){
            let purchase= 0 ;
            for(let i=0;i<this.no_of_shopped;i++){
                let items_purchased=this.purchased_history[i].item_purchased
                for(let j=0;j<items_purchased.length;j++){
                    purchase = items_purchased[j].product_price + purchase
                }
            }
            return purchase ;
        }
    }
    cust.push(customer);
}
for(let i=0;i<2;i++){
    console.log(`Information about Customer${i+1}`);
    let {name,email,phone,no_of_shopped,purchased_history}=cust[i];
    console.log(`Name: ${name}\r\nEmail: ${email}\r\nPhone: ${phone}\r\nNumber of times shopped:${no_of_shopped}`);
    for(let j=0;j<purchased_history.length;j++){
        let {purchased_date,item_purchased} = purchased_history[j];
        console.log(`Purchased date: ${purchased_date}`);
        for(let l=0;l<item_purchased.length;l++){
            let {product_name,product_price}=item_purchased[l];
            console.log(`Product name: ${product_name}\r\nProduct price: ${product_price}`);
        }
    }
    console.log(`Total: ${cust[i].total_purchase()}`);
    if(no_of_shopped>5){
        console.log(`${name} has shopped for more than 5 times`);
    }
}
