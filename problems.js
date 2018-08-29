function isOldEnoughToVote(age) {
    return age>=18;
}

function getProperty(obj, key) {
    return obj[key];
}

function addProperty(obj, key) {
    obj[key] = true;
}

function removeProperty(obj, key) {
    delete obj[key];
}

function isEven(num) {
    return Number.isInteger(num/2);
}

function isOdd(num) {
    return !Number.isInteger(num/2);
}

function addToFront(arr, element) {
    for(var n = arr.length; n>0; n--){
        arr[n] = arr[n-1];
    }
    arr[0] = element;
    return arr;
}

function addToBack(arr, element) {
    arr[arr.length] = element;
    return arr;
}

function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

function getAllWords(str) {
    var word = "";
    var wordsArray = [];
    for(var n = 0; n<str.length; n++){
        if(str[n]===" "&&word.length>0){
            wordsArray[wordsArray.length] = word;
            word = "";
        }else{
            word = word + str[n];
        }
    }
    if(word.length>0){
        wordsArray[wordsArray.length] = word;
    }
    return wordsArray;
}

function extend(obj1, obj2) {
    for(var n in obj2){
        if(!obj1.hasOwnProperty(n)){
            obj1[n] = obj2[n];
        }
    }
    return obj1;
}

function removeStringValues(obj) {
    for(var n in obj){
        if(typeof obj[n] === "string"){
            delete obj[n];
        }
    }
}

function getIndexOf(char, str) {
    for(var n = 0; n<str.length; n++){
        if(str[n]===char){
            return n;
        }
    }
    return -1;
}

function keep(array, keeper) {
    var keepings = [];
    for (var n in array){
        if(array[n] === keeper){
            keepings[keepings.length] = keeper;
        }
    }
    return keepings;
}

function getLargestElementAtProperty(obj, key) {
    var largestNum;
    if(Array.isArray(obj[key]) && obj[key].length>0){
        largestNum = 0;
    }
    for(var n in obj[key]){
        if(obj[key][n]>largestNum){
            largestNum = obj[key][n];
        }
    }
    return largestNum;
}

function calculateBillTotal(preTaxAndTipAmount) {
    return preTaxAndTipAmount + (0.095*preTaxAndTipAmount) + (0.15*preTaxAndTipAmount);
}

function sumDigits(num) {
    num = num.toString();
    var sum = 0;
    for(var n = 0; n<num.length; n++){
        if(n===0 && num[0]==="-"){
            n++;
            sum = -1* Number(num[n]);
        }else{
            sum+=Number(num[n]);
        }
    }
    return sum;
}

function listAllValues(obj) {
    var returnArray = [];
    for(var n in obj){
        returnArray[returnArray.length] = obj[n];
    }
    return returnArray;
}

function detectOutlierValue(string){
    var nums = [];
    var pNum = "";
    var n;
    for(n = 0; n<string.length; n++){
        if(string[n]===" "){
            nums[nums.length] = parseInt(pNum);
            pNum = "";
        }else{
            pNum = pNum + string[n];
        }
    }
    if(pNum.length>0){
        nums[nums.length] = parseInt(pNum);
    }
    var key;
    if(nums[0]%2 === nums[1]%2 || nums[0]%2 === nums[2]%2){
        if(nums[0]%2 === 0){
            key = 1;
        }else{
            key = 0;
        }
    }else{
        if(nums[1]%2 === 0){
            key = 1;
        }else{
            key = 0;
        }
    }
    for(n in nums){
        if(nums[n]%2===key){
            n++;
            return n;
        }
    }
}

function search(array, value) {
    var lowpoint = 0;
    var highpoint = array.length;
    var midpoint = lowpoint + Math.floor((highpoint - lowpoint)/2);
    while(array[midpoint]!==value&&midpoint!==lowpoint){
        console.log(midpoint);
        if(value>array[midpoint]){
            lowpoint = midpoint;
        }else{
            highpoint = midpoint;
        }
        midpoint = lowpoint + Math.floor((highpoint-lowpoint)/2);
    }
    if(array[midpoint]===value){
        return midpoint;
    }else{
        return null;
    }
}