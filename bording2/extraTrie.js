class trieNode{
    constructor(){
        this.child={}
        this.isEnd = false
    }

}

class trie{
    constructor(){
        this.root = new trieNode()
    }

    insert(word){
        let node = this.root
        for(let i = 0 ; i < word.length ; i++ ){
            let char = word[i]
            if(!node.child[char]){
                node.child[char] = new trieNode()
            }
            node = node.child[char];
        }
        node.isEnd = true ;
    }

    search(word){
        let node = this.root ;
        for(let i = 0 ;i<word.length;i++){
            let char = word[i]
            if(!node.child[char]){
                return false
            }
            node = node.child[char]
        }
        return node.isEnd
    }
    auto(word){
        let node = this.root ;
        for(let i = 0 ; i<word.length;i++){
            let char = word[i]
            if(!node.child[char]){
                return []
            }
            node = node.child[char]
        }
        let items=[]
        this.autoWord(node,word,items)
        return items
    }
    autoWord(node,word,items){
        if(node.isEnd){
            items.push(word)
        }

        for(let char in node.child){
            this.autoWord(node.child[char],word+char,items)
        }
    }

    delete(word){
        function dlt(node,word,index=0){
            if(word.length==index){
                if(!node.isEnd){
                    return false
                }
                node.isEnd=false;
                return Object.keys(node.child).length==0
            }

            let char = word[index]
            let child = node.child[char]
            if(!node.child[char]){
                return false
            }
            let dlting = dlt(node.child[char],word,index+1)

            if(dlting){
                delete node.child[char]
                return Object.keys(node.child).length==0 && !node.isEnd
            }
        }
        dlt(this.root,word)
    }

    suffix(word){
        let node = this.root
        for(let i=0;i<word.length;i++){
            for(let j=i;j<word.length;j++){
                let char= word[j]
                if(!node.child[char]){
                    node.child[char] = new trieNode() 
                }
                node = node.child[char]
            }

        }

       node.isEnd = true ;
    }

}

const tr = new trie()
tr.insert('thakiyudheen')
tr.insert('thajudheen')
tr.suffix('thajudheensfds')
tr.delete('thakiyudheen')


console.log(tr.search('thakiyudheen'));
console.log(tr.auto('tha'));

