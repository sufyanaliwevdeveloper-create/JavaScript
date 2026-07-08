let linkedinLeads = 15;
let referelLeads = 5;

if (linkedinLeads + referelLeads >= 50) {
    console.log("Goal Achived")
}
else if (linkedinLeads + referelLeads >= 30) {
    console.log("Good Progress")
}
else{
    console.log("Still Need More outreach")
}

let age = 18;
let coursePurchased = false;
let emailVerified = false;

if (age >= 18 , coursePurchased !== emailVerified) {
    console.log("Start Your Course")
}

else if (coursePurchased === emailVerified , age >= 18) {
    console.log("Verified your Email")   
}

else{
    console.log("Acces Denied")   
}

let productPrice = 1000;
let productQuantity = 4;
let availableStock = 10;
let minimumShoppingAmountForFreeShipping = 5000;

if (productPrice * productQuantity <= minimumShoppingAmountForFreeShipping, productQuantity < availableStock) {
    
    console.log("Congratulations! You are eligible for our free shipping program")   
}

else if (productPrice * 4, productQuantity < availableStock) {
    
    console.log("Your order ready")   
}