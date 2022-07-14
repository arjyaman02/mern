const form= document.getElementsByTagName('form')[0]; 
form.addEventListener("submit", (event) => {
    let valid = 0;
    const name = document.querySelector("#name").value;
    if(valid==0 && name==''){
        valid=1;
        error_message='Enter the name!';
    }
    const email = document.querySelector("#email").value;
    if(valid==0 && email==''){
        valid=1;
        error_message='Enter the email!';
    }
    const phone = document.querySelector("#phone").value;
    if(valid==0 && phone==''){
        valid=1;
        error_message='Enter the number!';
    }
    const gendervalue = document.getElementsByName("gender");
    let gender = '';
    for(let i=0;i<gendervalue.length;i++) {
        if(gendervalue[i].checked) {
            gender = gendervalue[i].value;
        }
    }
    if(gender=='' && valid==0){
        valid=1;
        error_message='Select the gender';
    }
    const pin = document.querySelector("#pincode").value;
    if(pin=='' && valid==0)
    {
        valid=1;
        error_message='Enter address correctly';

    }
    const street = document.querySelector("#street").value;
    const locality = document.querySelector("#locality").value;
    const city = document.querySelector("#City").value;
    const state = document.querySelector("#State").value;
    if((locality==''||state==''||city=='') && valid==0)
    {
        valid=1; 
        error_message='Enter address correctly';

    }
    const password = document.querySelector("#pwd").value;
    const confirmPassword = document.querySelector("#conpwd").value;
    if((password==''||confirmPassword=='')&& valid==0){
        valid=1;
        error_message='Enter the password';
    }
    if(confirmPassword != password && valid==0){
        valid=1;
        error_message='Both the password should be same.';
    }
    const check = document.querySelector("#i_agree").checked ? document.querySelector("#i_agree").value : '';
    if(check!="1"){
        valid=1;
        error_message='Agree to the terms and conditions';
    }
    if(valid==1 && error_message!=''){
        document.querySelector(".error_message").innerText=error_message;
        document.querySelector(".error_message").style.display="block";
        document.querySelector(".error_message").style.color="rgb(211, 51, 51)";
    }
    if(valid==0){
        document.querySelector(".error_message").innerText='';
        console.log(`name: ${name}`);  
        console.log(`email: ${email}`);
        console.log(`Gender: ${gender}`);
        console.log(`locality: ${locality}`);
        console.log(`city: ${city}`);
        console.log(`state: ${state}`);
        console.log(`Pincode: ${pin}`);
        document.querySelector("#show_name").innerText = 'Name: '+ name;
        document.querySelector("#show_email").innerText = 'Email: '+ email;
        document.querySelector("#show_gender").innerText = 'Gender: '+ gender;
        document.querySelector("#show_phoneno").innerText = 'Phoneno: '+ phone;
        document.querySelector("#show_address").innerText = 'Address: '+ street +' , ' + locality + ' , '+ city + ' , '+ state + ' , ' + pin;
    

    }
    event.preventDefault();
})

