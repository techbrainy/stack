class stack_functions {


    constructor() {
        this.stackJS = [];

    }

    push(data) {


        return this.stackJS[this.stackJS.length] = data;


    }
    pop() {
        return this.stackJS[this.stackJS.length--]
    }
    peek() {

    }

}
const stackelements = new stack_functions();
stackelements.push(4);
console.log(stackelements.stackJS)
stackelements.push(6);
console.log(stackelements.stackJS)
stackelements.push(8);
console.log(stackelements.stackJS)
stackelements.pop();
console.log(stackelements.stackJS)