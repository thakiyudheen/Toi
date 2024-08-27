// 9
// 13+9+1 = 23
// 5+13+9+1+2 = ..
// 2+5+13+9+1+2+3 = ..
// -1+2+5+13+9+1+2+3+-2 = ..

const ab = [-1,2,5,13,9,1,2,3,-2]
let mid= Math.floor(ab.length/2)
for(let i=1;i<10;i=i+2){

    
  let left = 4-Math.floor(i/2)
  let str=''
  let sum = 0
  for(let j=1;j<=i;j++){
    sum +=ab[left]
    if(i==1){
         str+=`${ab[left]}`
    }else{
        str+=`${ab[left]}${i==j?`=${sum}`:'+'}`
    }
    left++

  }
  console.log(str);
  
   
}

// 2+5+23+9+1+2 = 42
// 2+5+23+9+1 = 40
// 2+5+23+9 = 39
// 2+5+23 = 30
// 2+5 = 27
// 2 = 2
const abs= [2,5,23,9,1,2]

for(let i = 0;i<abs.length;i++){
    let str=''
    let sum=0;
    for(let j=0;j<=abs.length-i-1;j++){
       sum+=abs[j]
        str+=`${abs[j]}${j==abs.length-i-1?`=${eval(sum )}`:`+`}`
    }
    console.log(str);
    
}


// 10+9+8+7+6+5+5+6+7+8+9+10 = 90
// 10+9+8+7+6+6+7+8+9+10 = 80
// 10+9+8+7+7+8+9+10 = 68
// 10+9+8+8+9+10 = 54
// 10+9+9+10 = 38
// 10+10 = 20
// const arr=[10,9,8,7,6,5]
for(let i =13 ;i > 0;i=i-2){
    let k=10;
    let str=''
    let sum=0;
    for(let j=1;j<i;j++){
        
        if(Math.floor(i/2)>j){
            sum+=k
            str+=`${k}${j==i-1?`=${sum}`:"+"}`
            k--
            
        }else{
            sum+=k
            str+=`${k}${j==i-1?`=${sum}`:"+"}`
            k++
            if(j==Math.floor(i/2)){k--}
        }
    }
    console.log(str);
    
}