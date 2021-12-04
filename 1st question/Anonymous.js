let arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let arr2=["a","b","c","d","e"];
let arr3=["aba","bomb","crazy","deed","eye"];

//print the odd numbers 
var odd = function(){
    for(i in arr1){
        if(arr1[i]%2 !==0){
        console.log(arr1[i]);
    }
    
    }
}

odd(arr1);

//Sum of all numbers

var sum = function(){
    var temp=0;
    for(i in arr1){
        temp = temp + arr1[i];
    }
    console.log(temp);
}

sum(arr1);

//Prime numbers

arr1.forEach(function(arr){
    if(arr==1 || arr==2 || arr==3){
        console.log(arr);
    }
    
    if(arr%2 !==0 && arr%3 !==0 && arr!==1){
        console.log(arr);
    }
});

//palindrome in array

arr3.forEach(function(arr){
    let str = arr;
    let strReverse = str.split("").reverse().join("");

if (str === strReverse) {
  console.log(arr);
} 
});

//Titlecase in array 

arr3.forEach(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    console.log(str.join(' ')) ;
  });