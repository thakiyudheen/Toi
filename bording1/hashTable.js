class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size=size
    }
    hash(key){
        let sum=0;
        for(let i = 0 ;i<key.length;i++){
            sum+=key.charCodeAt(i)
        }
        console.log(sum );
        
        return Math.floor(sum/this.size)
    }
    set(key,value){
        let index = this.hash(key)
        console.log('the index',index);
        
        let bucket = this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let finded = bucket.find((el)=>el[0]==key)
            if(finded){
                finded[1]=value
            }else{
                this.table[index].push([key,value])
            }
        }
    }
    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            return false
        }else{
            let finded = bucket.find((el)=>el[0]==key)
            if(finded){
                return finded[1]
            }else{
                return false
            }
        }
    }
    remove(key){
        let index = this.hash(key)
        let  bucket = this.table[index]
        if(bucket){
            let finded = bucket.find((el)=>el[0]==key)
            if(finded){
                finded.splice(bucket.indexOf(finded),1)
                return 'success'
            }
        }

        return 'not font'
    }
}

const ht = new hashTable(50)
ht.set('name','thakiyu')
ht.set('age',21)
console.log(ht.remove('age'));
 

console.log(ht.get('age'));
 
