class graph {
    constructor() {
        this.adlist = {}
    }
    addVertex(vertex) {
        if (!this.adlist[vertex]) {
            this.adlist[vertex] = new Set()
        }

    }
    addEdges(v1, v2) {
        if (!this.adlist[v1]) {
            this.addVertex(v1)
        }
        if (!this.adlist[v2]) {
            this.addVertex(v2)
        }

        this.adlist[v1].add(v2)
        this.adlist[v2].add(v1)
    }

        bfs(start) {
            if (!this.adlist[start]) {
                return null
            }
            let queue = []
            let visited = {}
            queue.push(start)
            visited[start] = true
            while (queue.length) {
                let current = queue.shift()
                console.log(current);
                for (let neighbour of this.adlist[current]) {
                    if (!visited[neighbour]) {
                        visited[neighbour] = true
                        queue.push(neighbour)
                    }
                }

            }
        }

    dfs(start) {
        let visited = {}
        let stack = []
        stack.push(start)
        while (stack.length) {
            let current = stack.pop()
            if (!visited[current]) {
                console.log(current);
                visited[current] = true;
                for (let neighbour of this.adlist[current]) {
                    stack.push(neighbour)
                }

            }
        }
    }

    isCercular(start) {
        if (!this.adlist[start]) {
            return null
        }

        let parent = {}
        let visited = {}
        let queue = []
        queue.push(start)
        visited[start] = true
        parent[start] = -1

        while (queue.length) {
            let current = queue.shift()
            for (let neighbour of this.adlist[current]) {
                if (!visited[neighbour]) {
                    visited[neighbour] = true
                    queue.push(neighbour)
                    
                    [neighbour] = current;
                } else if (parent[current] != neighbour) {
                    return true
                }
            }
            
        }

        return false


    }

    print(){
        for(let char in this.adlist){
            console.log(char,'====>>>>',this.adlist[char]);
            
        }
    }
}

const gr = new graph()
gr.addEdges('a','b')
gr.addEdges('b','c')
gr.addEdges('c','d')

console.log(gr.print());
gr.bfs('a');
gr.dfs('a');
console.log(gr.isCercular('a'));

