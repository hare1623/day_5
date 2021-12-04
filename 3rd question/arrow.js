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

var sum = ()=>{
    var temp=0;
    for(i in arr1){
        temp = temp + arr1[i];
    }
    console.log(temp);
}

sum(arr1);

//Prime numbers

var prime =((arr)=>{
    for(var i in arr){
    if(arr[i]==1 || arr[i]==2 || arr[i]==3){
        console.log(arr[i]);
    }
    
    if(arr[i]%2 !==0 && arr[i]%3 !==0 && arr[i]!==1){
        console.log(arr[i]);
    }
    }
});

prime(arr1);

//palindrome in array

var palindrome =((arr)=>{
    for (var i in arr){
       let str = arr[i];
    let strReverse = str.split("").reverse().join("");

if (str === strReverse) {
  console.log(arr[i]);
} 
    }
     
});

palindrome(arr3);


//Titlecase in array 

var Titlecase =((arr)=>{
    for (var j in arr){
        str = arr[j];
      str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    console.log(str.join(' ')) ;
    }
});

Titlecase(arr3);