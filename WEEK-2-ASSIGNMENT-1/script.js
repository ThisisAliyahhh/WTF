const User1 = {
    name: "Mercy Obobo",
    balance: 2000,
    currency: "USD",
    type: "Checking",
 
};
const User2 = {
    name: "Aliyah Ogunleye",
    balance: 3000,
    currency: "NGN",
    type: "Savings",
};
const User3 = {
    name: "Olubunmi Elegbeleye",
    balance: 4000,
    currency: "NGN",
    type: "Savings",
};
 
const User4 = {
    name: "Animbom Odette",
    balance: 5000,
    currency: "USD",
    type: "Checking",
};
 

//initial amount for all the users
console.log("===== Initial Amount =====");
console.log(`${User1.name}: ${User1.balance}`);
console.log(`${User2.name}: ${User2.balance}`);
console.log(`${User3.name}: ${User3.balance}`);
console.log(`${User4.name}: ${User4.balance}`);
console.log(""); // For extra line break
 
let Savings = 0;
let Checking = 50;

let amount = 1500;

/* 
Transaction between User1 and User4. 
Withdrawal from User1 and Deposit to user4 
Same currentcy but insufficient fund also does the monthly maintainance
*/

// Checks if the currency are the same
if (User1.currency != User4.currency){
    console.log("Transfer failed: currency mismatch");
}
else{
    if (amount > User1.balance){
        console.log(`Withdrawal denied for ${User1.name}: Insufficient funds`);
    }

    else{
        
        // Deduct amount from User1 
        User1.balance -= amount;
        
        // Add amount from User4 
        User4.balance += amount;

        console.log(`Transaction successful from ${User1.name} to ${User4.name}`);
    }
}
console.log(""); // For extra line break

/* 
Transaction between User2 and User3. 
Withdrawal from User2 and Deposit to user3 
Same currency, transaction successful also does the monthly maintainance
*/

// Checks if the currency are the same
if (User2.currency != User3.currency){
    console.log("Transfer failed: currency mismatch");
}
else{
    if (amount > User2.balance){
        console.log(`Withdrawal denied for ${User2.name}: Insufficient funds`);
    }

    else{
        // Deduct amount from User2 
        User2.balance -= amount;

        // Add amount from User3 
        User3.balance += amount;
       
        console.log(`Transaction successful from ${User2.name} to ${User3.name}`)
    }
}
console.log("") // For extra line break

/* 
Transaction between User1 and User2. 
Withdrawal from User2 and Deposit to user1
Different currency 
*/

// Checks if the currency are the same
if (User1.currency != User2.currency){
    console.log("Transfer failed: currency mismatch");
}
else{
    if (amount > User2.balance){
        console.log(`Withdrawal denied for ${User2.name}: Insufficient funds`);
    }

    else{
        // Deduct amount from User2 
        User2.balance -= amount;

        // Add amount from User3 and caculates the savings 
        User1.balance += amount;
        
        console.log(`Transaction successful from ${User2.name} to ${User1.name}`);
    }
}
console.log("") // For extra line break

// Bonus
if (User1.currency != User2.currency){
    console.log("Retrying...")
    console.log("Converting...")
    //USD to NGN 1USD = 1500 NGN
    if (User1.currency == "USD"){
        User1.balance *=  1500;
    }
    if (amount > User2.balance){
        console.log(`Withdrawal denied for ${User2.name}: Insufficient funds`);
    }
    else{
        // Deduct amount from User2 
        User2.balance -= amount;

        // Add amount from User1 
        User1.balance += amount; 
        console.log(`Transaction successful from ${User2.name} to ${User1.name}`);
    }
        User1.balance = parseInt(User1.balance /= 1500) // Converts back to USD
}
console.log("") // For extra line break

//Monthly Maintanace

// User1 Maintanace
if (User1.type == "Savings"){
    Savings = User1.balance * 0.2;
    User1.balance += Savings;
}
else{
    User1.balance = User1.balance - Checking;
}

// User2 Maintanace
if (User2.type == "Savings"){
    Savings = User2.balance * 0.2;
    User2.balance += Savings;
}
else{
    User2.balance = User2.balance - Checking;
}

// User3 Maintanace
if (User3.type == "Savings"){
    Savings = User3.balance * 0.2;
    User3.balance += Savings;
}
else{
    User3.balance = User3.balance - Checking;
}

// User4 Maintanace
if (User4.type == "Savings"){
    Savings = User4.balance * 0.2;
    User4.balance += Savings;
}
else{
    User4.balance = User4.balance - Checking;
}

console.log("") // For extra line break

// Comparisons Checks for the hightest amount

// Before comparison convert User1 and User4 currency to NGN
if (User1.currency == "USD"){
        User1.balance *=  1500;
}
if (User4.currency == "USD"){
        User4.balance *=  1500;
}

// Assume User1 is both the highest and lowest
let highestUserName = User1.name;
let highestUserBalance = User1.balance;
let lowestUserName = User1.name;
let lowestUserBalance = User1.balance;

// checks for the highest
// compares highestBalnce with User2Balance
if (User2.balance > highestUserBalance){
    highestUserName = User2.name;
    highestUserBalance = User2.balance;
}

//compares highestBalnce with User3Balance
if(User3.balance > highestUserBalance){
    highestUserName = User3.name;
    highestUserBalance = User3.balance;
}

//compares highestBalnce with User4Balance
if (User4.balance > highestUserBalance){
    highestUserName = User4.name;
    highestUserBalance = User4.balance;
}


// compares lowestBalnce with User2Balance
if (User2.balance < lowestUserBalance){
    lowestUserName = User2.name;
    lowestUserBalance = User2.balance;
}

//compares lowestBalnce with User3Balance
if(User3.balance < lowestUserBalance){
    lowestUserName = User3.name;
    lowestUserBalance = User3.balance;
}
//compares lowestBalnce with User4Balance
if (User4.balance < lowestUserBalance){
    lowestUserName = User4.name;
    lowestUserBalance = User4.balance;
}


console.log(`Highest Balance is ${highestUserBalance}. Account Name: ${highestUserName} in NGN`);
console.log(`Lowest Balance is ${lowestUserBalance}. Account Name: ${lowestUserName} in NGN`);

// convert User1 and User 4 back to USD
User1.balance = parseInt(User1.balance / 1500);
User4.balance = parseInt(User4.balance / 1500);

console.log(""); // For extra line break

// Account Status

//User1
let User1Staus;
if (User1.balance > 0){
    User1Staus = "Active";
}
else if (User1.balance === 0){
    User1Staus = "Empty";
}
else{
    User1Staus = "Overdrawn";
}

//User2
let User2Staus;
if (User2.balance > 0){
    User2Staus = "Active";
}
else if (User2.balance === 0){
    User2Staus = "Empty";
}
else{
    User2Staus = "Overdrawn";
}

//User3
let User3Staus;
if (User3.balance > 0){
    User3Staus = "Active";
}
else if (User3.balance === 0){
    User3Staus = "Empty";
}
else{
    User3Staus = "Overdrawn";
}

//User4
let User4Staus;
if (User4.balance > 0){
    User4Staus = "Active";
}
else if (User4.balance === 0){
    User4Staus = "Empty";
}
else{
    User4Staus = "Overdrawn";
}
console.log("") // For extra line break


console.log("===== Final Balance =====")
console.log(`Account Name: ${User1.name}; Account Balance: ${User1.balance}; Currency: ${User1.currency}; Account Type: ${User1.type}; Account Status: ${User1Staus}`);
console.log(`Account Name: ${User2.name}; Account Balance: ${User2.balance}; Currency: ${User2.currency}; Account Type: ${User2.type}; Account Status: ${User2Staus}`);
console.log(`Account Name: ${User3.name}; Account Balance: ${User3.balance}; Currency: ${User3.currency}; Account Type: ${User3.type}; Account Status: ${User3Staus}`);
console.log(`Account Name: ${User4.name}; Account Balance: ${User4.balance}; Currency: ${User4.currency}; Account Type: ${User4.type}; Account Status: ${User4Staus}`);

