
// These values are in pound.
const bat1value = 100;
const bat2value = 145;
const ball1value = 5;
const ball2value = 6;
const helmet1value = 80;
const helmet2value = 45;

const bat = document.getElementById("bat");
const ball = document.getElementById("ball");
const helmet = document.getElementById("helmet");

const batamount = document.getElementById("batamount");
const ballamount = document.getElementById("ballamount");
const helmetamount = document.getElementById("helmetamount");
const totalamount = document.getElementById("totalamount");

const numberamount = document.getElementsByClassName("numbertype");

const namefield = document.getElementById("name");
const emailfield = document.getElementById("email");
const addressfield = document.getElementById("address");

const resetbutton = document.getElementById("resetbutton");
const submitbutton = document.getElementById("submitbutton");

const checkoutbat = document.getElementById("checkoutbat");
const checkoutball = document.getElementById("checkoutball");
const checkouthelmet = document.getElementById("checkouthelmet");

for (let i = 0; i < 3; i++){
    numberamount[i].addEventListener("change", changeProducts);
}

bat.addEventListener("change", changeProducts);
ball.addEventListener("change", changeProducts);
helmet.addEventListener("change", changeProducts);

resetbutton.addEventListener("click", function() {
    bat.value = "sskashmir";
    ball.value = "red";
    helmet.value = "smc";

    for (let i = 0; i < 3; i++){
        numberamount[i].value = 0;
    }

    changeProducts();
    
})


function changeProducts () {
    // Changes image if select options are picked.
    if (bat.value == "caplus"){
        document.images[1].src = "shopimages/CAPLUS12000.webp";
        document.getElementById("name1").textContent = "CA Plus 12000";
        document.getElementById("price1").textContent = "Price: £" + bat2value;
    }
    else if (bat.value == "sskashmir"){
        document.images[1].src = "shopimages/SSKashmir.webp";
        document.getElementById("name1").textContent = "SS Kashmir";
        document.getElementById("price1").textContent = "Price: £" + bat1value;
    }

    if (ball.value == "white"){
        document.images[2].src = "shopimages/whitecricketball.webp";
        document.getElementById("name2").textContent = "White Leather";
        document.getElementById("price2").textContent = "Price: £" + ball2value;
    }
    else if (ball.value == "red"){
        document.images[2].src = "shopimages/redcricketball.webp";
        document.getElementById("name2").textContent = "Red Leather";
        document.getElementById("price2").textContent = "Price: £" + ball1value;
    }

    if (helmet.value == "dsc"){
        document.images[3].src = "shopimages/DSCGuard.webp";
        document.getElementById("name3").textContent = "DSC Guard";
        document.getElementById("price3").textContent = "Price: £" + helmet2value;
    }
    else if (helmet.value == "smc"){
        document.images[3].src = "shopimages/ShreyMaster.webp";
        document.getElementById("name3").textContent = "Shrey Master Class";
        document.getElementById("price3").textContent = "Price: £" + helmet1value;
    }

    updatePrice();
}

function updatePrice(){
    let total = 0;
    
    if (bat.value == "caplus"){
        total += batamount.value * bat2value;
        checkoutbat.textContent = "Cricket Bat: £" + (bat2value * (batamount.value));
    }
    else {
        total += batamount.value * bat1value;
        checkoutbat.textContent = "Cricket Bat: £" + (bat1value * (batamount.value));
    }

    if (ball.value == "white"){
        total +=  ballamount.value * ball2value;
        checkoutball.textContent = "Cricket Ball: £" + (ball2value * (ballamount.value));
    }
    else {
        total += ballamount.value * ball1value;
        checkoutball.textContent = "Cricket Ball: £" + (ball1value * (ballamount.value));
    }

    if (helmet.value == "dsc"){
        total += helmetamount.value * helmet2value;
        checkouthelmet.textContent = "Cricket Helmet: £" + (helmet2value * (helmetamount.value));        
    }
    else {
        total += helmetamount.value * helmet1value;
        checkouthelmet.textContent = "Cricket Helmet: £" + (helmet1value * (helmetamount.value));        
    }

    totalamount.textContent = "£" + total;
}

function checkLetters(){
    let namevalue = namefield.value;

    let letters = /^[A-Za-z][[A-Za-z\s]+$/;
    if (namevalue.match(letters)){
        return true;
    }
    else {
        return false;
    }
}

submitbutton.addEventListener("click", function(e) {
    // Stores information about what field has not been entered.
    let errors = [];

    if (batamount.value == 0 && ballamount.value == 0 && helmetamount.value == 0){
        errors.push("None of the amount fields have been entered");
    }

    if (namefield.value.length < 1){
        errors.push("Name field has not been entered");
    }

    if(!(checkLetters())){
        errors.push("Enter a valid name");
    }

    if (emailfield.value.length < 1){
        errors.push("Email field has not been entered");
    }
    if (addressfield.value.length < 1){
        errors.push("Address field has not been entered");
    }

    let message = "";
    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++){
            message = message.concat("\n", errors[i]);
        }
        alert(message);
        e.preventDefault();
    }
    else {
        alert("Thank you for shopping at Cricket Gladiators!");
    }
})