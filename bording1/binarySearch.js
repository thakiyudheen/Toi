function binarySearch(arr,target){
    let left = 0
    let right = arr.length-1

    while(left<right){
        let mid = Math.floor((left+right)/2)
        if(target==arr[mid]){
            return mid
        }else if(target<arr[mid]){
            right  = mid-1
        }else{
            left  = mid+1
        }
    }
    return -1
}

const arr=[1,2,3,4,5,6,7]
console.log(binarySearch(arr,6));

// binary search recursion---------------------
function biRec(arr,target,left=0,right=arr.length-1){
    if(left>right){
        return -1
    }
    let mid = Math.floor((left+right)/2)
    if(arr[mid]==target){
        return mid
    }else if(target<arr[mid]){
        return biRec(arr,target,left,mid-1)
    }else{
        return biRec(arr,target,mid+1,right)

    }

   
}
console.log('its recursion',biRec(arr,7));
