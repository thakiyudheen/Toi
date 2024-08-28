function isPalidrom(word, i = 0, j = word.length - 1) {
    if (i > j) {
        return true
    }
    if(word[i]!=word[j] ){
        return false
    }
    return isPalidrom(word,i+1,j-1)
}

console.log(isPalidrom('malayalam'));

function feb(n){
  if(n<2){
    return n
  }
  return feb(n-2)+feb(n-1)
}

console.log('feb',feb(10));


function sum(n){
    if(n==0){
        return 0;
    }

    return n+sum(n-1)
}
console.log('sum',sum(5));

function sumOdd(arr,i=arr.length-1){
    if(i<0){
        return 0
    }

    if(arr[i]%2==0){
        return arr[i]+sumOdd(arr,i-1)
    }else{
        return sumOdd(arr,i-1)
    }
}

console.log('this is array',sumOdd([1,2,3,4,5]));


function reverce(arr,i=0){
  if(i>arr.length-1-i){
    return arr
  }
  [arr[i],arr[arr.length-i-1]]=[arr[arr.length-i-1],arr[i]]
  return reverce(arr,i+1)

}

var arr=[1,2,3,4,5]
console.log(reverce(arr));
