class stack_functions {


    constructor() {
        this.stackJS = [];

    }

    push(data) {
        return this.stackJS.push(data);

    }
    pop(element) {


    }
    peek() {

    }

}
const stackelements = new stack_functions();
stackelements.push(4);
console.log(stackelements.stackJS)