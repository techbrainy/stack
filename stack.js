class stack_functions {



    constructor() {
        this.stackJS = [];



    }
    push(data) {
        this.stackJS[this.stackJS.length] = data;



    }
    pop() {

        if (this.stackJS.length > 0) {
            return this.stackJS[this.stackJS.length--]

        } else {
            console.log("Cannot pop more")

        }




    }
    peek() {
        return this.stackJS[this.stackJS.length];

    }
    stackSize() {
        console.log(this.stackJS.length);
    }

}
const stackelements = new stack_functions();

stackelements.stackSize();
stackelements.push(12, 2, 2, 4, 49, 5, 8);
console.log(stackelements.stackJS)

stackelements.pop();
stackelements.pop();

// stackelements.stackSize();

stackelements.stackSize();
//console.log(stackelements.stackJS)