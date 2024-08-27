class node{
    constructor(value){
        this.value  = value ;
        this.next=null;
        this.pre = null;
    }
}

class linkedList{
    constructor(){
        this.head=null
    }
    
    append(value){
        const newnode = new node(value)
        if(!this.head){
            this.head = newnode
            return 
        }
        let temp= this.head
        while(temp.next){
            temp=temp.next
        }
        newnode.pre =temp
        temp.next= newnode
    }

    reverse(){
        let current= this.head ;
        let temp = null;
        while(current){
            temp = current.pre
            current.pre = current.next
            current.next = temp

            current = current.pre 
        }

        if(temp){
            this.head= temp.pre
        }
    }
    display(){
        let temp = this.head ;
        while(temp){
            console.log(temp.value);
            temp=  temp.next
        }
    }
}

const lt = new linkedList()

lt.append(1)
lt.append(2)
lt.append(3)
lt.append(4)
lt.reverse()
lt.display()