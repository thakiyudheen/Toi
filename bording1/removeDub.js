let str='hello'
const d = str.split('').reduce((acc,cv)=>{

    
    if(!acc[cv]){
        acc[cv]=1
    }else{
        delete acc[cv]
    }
    return acc
},{})

console.log(Object.keys(d).join(''));
