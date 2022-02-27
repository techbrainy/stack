class stack_functions {
    constructor() {
        this.stackJS = [];
        this.index = -1;
        this.upperLimit = 10;

    }
    push(data) {
        if (this.index < this.upperLimit) {
            this.index++;
            this.stackJS[this.stackJS.length] = data;
        } else {
            console.log(`Cannot add "${data}" as stack limit is full`)
        }
    }
    pop() {

        if (this.index == -1) {
            console.log("Cannot pop more as you have reached lower limit")
        } else {
            let pop = this.stackJS.splice(this.index, 1);
            this.index--
                console.log("Last item popped :" + pop)
        }
    }
    peek() {
        if (this.stackJS[this.index] == null) {
            console.log(`The top element is not present`);
        } else {
            console.log(`The top element is: ${this.stackJS[this.index]}`);
        }
    }
    stackSize() {
        console.log("Current stack size is:" + this.index);
    }
}
const stackelements = new stack_functions();

stackelements.push(11);
stackelements.push(22);
stackelements.push(33);
stackelements.push(44);
stackelements.push(55);
stackelements.push(66);
stackelements.push(77);
stackelements.push(88);
stackelements.push(99);
stackelements.push(100);
stackelements.push(110);
console.log(stackelements.stackJS)
stackelements.stackSize();
stackelements.peek();
stackelements.push(18);
stackelements.pop();
console.log(stackelements.stackJS)
stackelements.pop();
stackelements.pop();
stackelements.pop();
stackelements.pop();
stackelements.pop();
stackelements.pop();
stackelements.pop();
stackelements.pop();
stackelements.pop();
stackelements.pop();

stackelements.peek();
stackelements.stackSize();