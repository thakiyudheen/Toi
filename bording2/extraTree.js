class  node{
    constructor(value){
        this.value= value;
        this.next= null;
    }

    
}
class tree{
    constructor(){
        this.root=null
    }
    insert(value){
        const newnode = new node(value)
        if(!this.root){
            this.root = newnode;
        }else{
            return this.insertNode(this.root,newnode)
        }

    }

    insertNode(root,newnode){
        if(newnode<root.value){
            if(!root.left){
                root.left=newnode;
            }else{
                return this.insertNode(rootleft,newnode)
            }

        }else{
            if(!root.right){
                root.right=newnode;
            }else{
                return this.insertNode(root.right,newnode)
            }
        }
    }

    delete(root,value){
        if(!root){
            return null
        }
        if(value<root.left){
            root.left=this.delete(root.left)
        }else if(value>root.right){
            root.right=this.delete(root.right)
        }else {
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }else if(!root.left&&!root.left){
                return null
            }

            root.value = this.min(root.right)
            root.right = this.delete(root.right,root.value)
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    bfs(root){
        let queue=[]
        queue.push(root)
        while(queue.length){
            let current= queue.shift()
            console.log(current.value);
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
            
        }
    }
    height(root){
        if(!root){
            return 0
        }

        return 1+Math.max(this.height(root.left),this.height(root.right))
    }

    isIdentical(root1,root2){
        if(!root1&&!root2){
            return true
        }
        if(!root1||!root2){
            return false
        }

        return (root1.value==root2.value&&this.isIdentical(root1.left,root2.left),this.isIdentical(root1.right,root2.right))
    }

    LAC(root,p,q){
        if(!root){
            return null
        }

        if(q<root.value&&p<root.value){
            return this.LAC(root.left,p,q)
        }
        if(q>root.value&&p>root.value){
            return this.LAC(root.right,p,q)
        }

        return root
    }

    isBst(root,min=-Infinity,max=Infinity){
        if(!root){
            return true
        }
        if(root.value<=min||root.value>=max){
            return false
        }
        return (this.isBst(root.left,min,root.value)&&this.isBst(root.right,root.value,max))
    }

    isBalanced(root){
       if(!root){
            return true
       }

       let left= this.height(root.left)
       let right = this.height(root.right)

       return (Math.abs(left-right)<=1&&this.isBalanced(root.left)&&this.isBalanced(root.right))
    }
    
    kthSmall(root,k){
        let result=null;
        let count=0;
        function inorder(node){
            if(!node || result!=null ){
                return 
            }

            inorder(node.left )
            count++
            if(count==k){
                result = node.value
                return
            }
            inorder(node.right )
        }
        inorder(root)
        return result
    }
    bfsLeaf(root){
        let queue=[]
        let arr=[]
        queue.push(root)
        while(queue.length){
            let current= queue.shift()
            console.log(current.value);
            if(!current.left&&!current.right){
                arr.push(current.value)
            }
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
            
        }
        return arr
    }


}

const tr = new tree()

tr.insert(1)
tr.insert(2)
tr.insert(3)
tr.insert(4)
tr.insert(5)


tr.bfs(tr.root)
console.log(tr.height(tr.root));
console.log(tr.min(tr.root));
console.log(tr.isBst(tr.root));
console.log(tr.isBalanced(tr.root));
console.log(tr.LAC(tr.root,2,3).value?tr.LAC(tr.root,2,3).value:null);
console.log(tr.kthSmall(tr.root,3));
console.log(tr.bfsLeaf(tr.root));



