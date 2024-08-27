class stack {
    constructor() {
        this.stack = []
    }
    push(value) {
        stack.push(value)
    }

    pop() {
        if (stack.length == 0) {
            return null
        }
        this.stack.pop()
    }
    peep() {
        return this.stack[this.stack.length - 1]
    }
}

// in this stack impliment queue--------------------

class stackToqueue {
    constructor() {
        this.queue1 = []
        this.queue2 = []
    }
    push(value) {
        this.queue1.push(value)
    }
    pop() {
        if (this.queue1.length == 0) {
            return null
        }
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift())
        }
        let pop = this.queue1.shift();

        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return pop
    }
}

const stqu = new stackToqueue()
stqu.push(1)
stqu.push(2)
stqu.push(3)
stqu.push(4)
stqu.push(5)
stqu.push(6)
stqu.pop()
stqu.pop()
console.log(stqu.queue1);
