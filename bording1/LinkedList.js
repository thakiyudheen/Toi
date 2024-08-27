class node{
    constructor(value){
        this.value = value ;
        this.next = null ;
    }

}
class linkedList{
    constructor(){
        this.head = null
    }
    insert(value){
        const newnode = new node(value)
        if(!this.head){
            this.head = newnode;
            return 
        }
        let temp = this.head ;
        while(temp.next!=null){
            temp= temp.next
        }
        temp.next = newnode
    }
    reverce(){
        let current = this.head;
        let prev = null 
        while(current){
            let next = current.next;
            current.next = prev;
            prev = current ;
            current = next ;
        }
        this.head= prev;
    }
    display(){
        let temp = this.head;
        while(temp){
            console.log(temp.value);
            temp=temp.next;
        }
    }
    isPalidrom(){
        if(this.head==null||this.head.next==null){
            return true;
        }
        let slow = this.head;
        let fast = this.head;
        while(fast&&fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow ;
        let pre = null 
        let next=null
        while(second){
            next = second.next;
            second.next = pre ;
            pre = second ;
            second = next ;
        }

        let reversed = pre ;

        let third = this.head ;
        while(reversed){
            if(reversed.value!= third.value){
                return false ;
            }

            reversed = reversed.next;
            third = third.next ;
        }
        return true
    }
   
   


}

function merge(head1,head2){
    let node1= head1.head
    let node2 = head2.head
    const lts=new  linkedList()

    while(node1||node2){
        if(!node1){
            lts.insert(node2.value)
            node2=node2.next;
        }else if(!node2){
            lts.insert(node1.value)
            node1=node1.next;
        }else{
            if(node1.value<node2.value){
                lts.insert(node1.value)
                node1=node1.next;
            }else{
                lts.insert(node2.value)
                node2=node2.next;
            }
        }

    }
    lts.display()
    
}

function unCommen(head1,head2){
    l1=head1
    l2=head2
    let commen = new Set()
    let visited = new Set()
    while(l1){
     commen.add(l1.value)
     visited.add(l1.value)
     l1=l1.next
    }

    while(l2){
     if(visited.has(l2.value)){
         commen.delete(l2.value)
     }else{
         commen.add(l2.value)
     }
     l2=l2.next
    }

    return commen
 }

const lt = new linkedList()

lt.insert(1)
lt.insert(2)
lt.insert(2)
lt.insert(3)
// lt.reverce()
// lt.display()
// console.log(lt.isPalidrom())

const lt1 = new linkedList()

lt1.insert(12)
lt1.insert(2)
lt1.insert(3)
lt1.insert(4)
// lt1.reverce()
// lt1.display()

// merge(lt1,lt)

console.log( unCommen( lt1.head,lt.head));
