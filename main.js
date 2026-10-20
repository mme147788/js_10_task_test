// Task 8: Detect if a Number Is a Palindrome
// set variables for a 3-digit number and check if it reads the same forward and backward.
// Example: Input: 121 -> Output: Palindrome
//          Input: 123 -> Output: Not a Palindrome

let number = 121; // INPUT

// (keep the "// INPUT" comments - the tests use them to try other values)

// write your code below this line

let temp=number
let reverseNum = 0

while(temp>0){
    reverseNum*=10
    reverseNum+=temp%10
    temp=(temp-temp%10)/10
}

if(number==reverseNum){
    console.log("Palindrome")
}

else{
    console.log("Not a Palindrome")
}
