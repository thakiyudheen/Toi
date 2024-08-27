class queue{
    constructor(){
        this.queue=[]
        
    }
    enqueue(value){
        this.queue.push(value)
    }
    dequeue(){
        if(this.queue.length==0){
            return null
        }
        return this.queue.shift()

    }
    peek(){
        return this.queue[0]
    }
}


// stack impliment here---------------------
class queuetoStack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    enqueue(value){
        this.stack1.push(value)
    }
    dequeue(){
      if(this.stack1.length==0){
        return null
      }
      while(this.stack1.length){
        this.stack2.push(this.stack1.pop())
      }
      let shifted = this.stack2.pop()
      while(this.stack2.length){
        this.stack1.push(this.stack2.pop())
      }
      return shifted
    }
}

const quest=new queuetoStack()

quest.enqueue(1)
quest.enqueue(2)
quest.enqueue(3)
quest.enqueue(4)
quest.enqueue(5)

// quest.dequeue()
// quest.dequeue()
console.log(quest.stack1);
