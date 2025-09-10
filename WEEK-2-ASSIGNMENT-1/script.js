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

let User1Name = User1.name;
let User2Name = User2.name;
let User3Name = User3.name;
let User4Name = User4.name;

let User1Balance = User1.balance;
let User2Balance = User2.balance;
let User3Balance = User3.balance;
let User4Balance = User4.balance;
 
let User1currency = User1.currency;
let User2currency = User2.currency;
let User3currency = User3.currency;
let User4currency = User4.currency;
 
let User1type = User1.type;
let User2type = User2.type;
let User3type = User3.type;
let User4type = User4.type;
 

//initial amount for all the users
console.log("===== Initial Amount =====");
console.log(`${User1Name}: ${User1Balance}`);
console.log(`${User2Name}: ${User2Balance}`);
console.log(`${User3Name}: ${User3Balance}`);
console.log(`${User4Name}: ${User4Balance}`);
console.log(""); // For extra line break
 
let Savings = 0;
let Checking = 50;

let amount = 1500;

/* 
Transaction between User1 and User4. 
Withdrawal from User1 and Deposit to user2 
Same currentcy but insufficient fund also does the monthly maintainance
*/

// Checks if the currency are the same
if (User1currency != User4currency){
    console.log("Transfer failed: currency mismatch");
}
else{
    if (amount > User1Balance){
        console.log(`Withdrawal denied for ${User1Name}: Insufficient funds`);
    }

    else{
        // Checks account type

        // Deduct amount from User1 and checks type
        if (User1type == "Savings"){
            User1Balance -= amount;
            Savings = User1Balance * 0.2;
            User1Balance += Savings;
        }
        else{
            User1Balance = User1Balance - amount - Checking;
        }

        // Add amount from User4 and caculates the savings 
        if (User4type == "Savings"){
            Savings = 0;
            User4Balance += amount;
            Savings = User4Balance * 0.2;
            User4Balance += Savings;
        }
        else{
            User4Balance = User4Balance + amount - Checking;
        }
        console.log(`Transaction successful from ${User1Name} to ${User4Name}`);
}
}
console.log(""); // For extra line break

/* 
Transaction between User2 and User3. 
Withdrawal from User2 and Deposit to user3 
Same currency, transaction successful also does the monthly maintainance
*/

// Checks if the currency are the same
if (User2currency != User3currency){
    console.log("Transfer failed: currency mismatch");
}
else{
    if (amount > User2Balance){
        console.log(`Withdrawal denied for ${User2Name}: Insufficient funds`);
    }

    else{
        // Checks account type

        // Deduct amount from User2 and checks type
        if (User2type == "Savings"){
            User2Balance -= amount;
            Savings = 0;
            Savings = User2Balance * 0.2;
            User2Balance += Savings;
        }
        else{
            User2Balance = User2Balance - amount - Checking;
        }

        // Add amount from User3 and caculates the savings 
        if (User3type == "Savings"){
            Savings = 0;
            User3Balance += amount;
            Savings = User3Balance * 0.2;
            User3Balance += Savings;
        }
        else{
            User3Balance = User3Balance + amount - Checking;
        }
        console.log(`Transaction successful from ${User2Name} to ${User3Name}`)
}
}
console.log("") // For extra line break

/* 
Transaction between User1 and User2. 
Withdrawal from User2 and Deposit to user2 
Different currency 
*/

// Checks if the currency are the same
if (User1currency != User2currency){
    console.log("Transfer failed: currency mismatch");
}
else{
    if (amount > User2Balance){
        console.log(`Withdrawal denied for ${User2Name}: Insufficient funds`);
    }

    else{
        // Checks account type

        // Deduct amount from User2 and checks type
        if (User2type == "Savings"){
            User2Balance -= amount;
            Savings = User2Balance * 0.2;
            User2Balance += Savings;
        }
        else{
            User2Balance = User2Balance - amount - Checking;
        }

        // Add amount from User3 and caculates the savings 
        if (User1type == "Savings"){
            Savings = 0;
            User1Balance += amount;
            Savings = User1Balance * 0.2;
            User1Balance += Savings;
        }
        else{
            User1Balance = User1Balance + amount - Checking;
        }
        console.log(`Transaction successful from ${User2Name} to ${User1Name}`);
}
}
console.log("") // For extra line break

// Bonus
if (User1currency != User2currency){
    console.log("Retrying...")
    console.log("Converting...")
    //USD to NGN 1USD = 1500 NGN
    if (User1currency == "USD"){
        User1Balance *=  1500;
    }
    if (amount > User2Balance){
        console.log(`Withdrawal denied for ${User2Name}: Insufficient funds`);
    }
    else{
        // Checks account type

        // Deduct amount from User2 and checks type
        if (User2type == "Savings"){
            User2Balance -= amount;
            Savings = User2Balance * 0.2;
            User2Balance += Savings;
        }
        else{
            User2Balance = User2Balance - amount - Checking;
        }

        // Add amount from User3 and caculates the savings 
        if (User1type == "Savings"){
            Savings = 0;
            User1Balance += amount; 
            Savings = User1Balance * 0.2;
            User1Balance += Savings;
        }
        else{
            User1Balance = User1Balance + amount - Checking; //
        }
        User1Balance = parseInt(User1Balance /= 1500) // Converts back to USD
        console.log(`Transaction successful from ${User2Name} to ${User1Name}`);
    }
}
console.log("") // For extra line break

// Comparisons Checks for the hightest amount

// Before comparison convert User1 and User4 currency to NGN
if (User1currency == "USD"){
        User1Balance *=  1500;
}
if (User4currency == "USD"){
        User4Balance *=  1500;
}

// Assume User1 is both the highest and lowest
let highestUserName = User1Name;
let highestUserBalance = User1Balance;
let lowestUserName = User1Name;
let lowestUserBalance = User1Balance;

// checks for the highest
// compares highestBalnce with User2Balance
if (User2Balance > highestUserBalance){
    highestUserName = User2Name;
    highestUserBalance = User2Balance;
}

//compares highestBalnce with User3Balance
if(User3Balance > highestUserBalance){
    highestUserName = User3Name;
    highestUserBalance = User3Balance;
}

//compares highestBalnce with User4Balance
if (User4Balance > highestUserBalance){
    highestUserName = User4Name;
    highestUserBalance = User4Balance;
}


// compares lowestBalnce with User2Balance
if (User2Balance < lowestUserBalance){
    lowestUserName = User2Name;
    lowestUserBalance = User2Balance;
}

//compares lowestBalnce with User3Balance
if(User3Balance < lowestUserBalance){
    lowestUserName = User3Name;
    lowestUserBalance = User3Balance;
}
//compares lowestBalnce with User4Balance
if (User4Balance < lowestUserBalance){
    lowestUserName = User4Name;
    lowestUserBalance = User4Balance;
}


console.log(`Highest Balance is ${highestUserBalance}. Account Name: ${highestUserName} in NGN`);
console.log(`Lowest Balance is ${lowestUserBalance}. Account Name: ${lowestUserName} in NGN`);

// convert User1 and User 4 back to USD
User1Balance = parseInt(User1Balance / 1500);
User4Balance = parseInt(User4Balance / 1500);

console.log(""); // For extra line break

// Account Status

//User1
let User1Staus;
if (User1Balance > 0){
    User1Staus = "Active";
}
else if (User1Balance === 0){
    User1Staus = "Empty";
}
else{
    User1Staus = "Overdrawn";
}

//User2
let User2Staus;
if (User2Balance > 0){
    User2Staus = "Active";
}
else if (User2Balance === 0){
    User2Staus = "Empty";
}
else{
    User2Staus = "Overdrawn";
}

//User3
let User3Staus;
if (User3Balance > 0){
    User3Staus = "Active";
}
else if (User3Balance === 0){
    User3Staus = "Empty";
}
else{
    User3Staus = "Overdrawn";
}

//User4
let User4Staus;
if (User4Balance > 0){
    User4Staus = "Active";
}
else if (User4Balance === 0){
    User4Staus = "Empty";
}
else{
    User4Staus = "Overdrawn";
}
console.log("") // For extra line break


console.log("===== Final Balance =====")
console.log(`Account Name: ${User1Name}; Account Balance: ${User1Balance}; Currency: ${User1currency}; Account Type: ${User1type}; Account Status: ${User1Staus}`);
console.log(`Account Name: ${User2Name}; Account Balance: ${User2Balance}; Currency: ${User2currency}; Account Type: ${User2type}; Account Status: ${User2Staus}`);
console.log(`Account Name: ${User3Name}; Account Balance: ${User3Balance}; Currency: ${User3currency}; Account Type: ${User3type}; Account Status: ${User3Staus}`);
console.log(`Account Name: ${User4Name}; Account Balance: ${User4Balance}; Currency: ${User4currency}; Account Type: ${User4type}; Account Status: ${User4Staus}`);

