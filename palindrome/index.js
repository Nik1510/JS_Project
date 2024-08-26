const input = document.getElementById("input");

function reverseString(str){
    // we are going to convert the str into array
    return str.split("").reverse().join("")
    // this function is going to convert the dog into ["d", "o","g"]
    // where it is Array we are going to identify it as an Array to compare the proto_type
    // and then we are going to join the array into a string
    

    //  here we have used 3 operators "split","reverse", "join"
}

function check(){
    const value = input.value;
    const reverse = reverseString(value);
    if(value === reverse){
        alert("The string is a palindrome")
    }else{
        alert("The string is not a palindrome")
    }
    input.value =""
}