class stack_functions {



    constructor() {
        this.stackJS = [];
        this.upperLimit = 10;



    }
    push(data) {


        if (this.stackJS.length < this.upperLimit) {
            this.stackJS[this.stackJS.length] = data;
        } else {
            console.log("Cannot add more as stack limit is full")
        }



    }

    pop() {

        if (this.stackJS.length > 0) {
            return this.stackJS[this.stackJS.length--]

        } else {
            console.log("Cannot pop more as you have reached 0th index")

        }

    }
    peek() {
        return this.stackJS[this.stackJS.length];

    }
    stackSize() {
        console.log("Current stack size is:" + this.stackJS.length);
    }

}
const stackelements = new stack_functions();

stackelements.stackSize();
stackelements.push(1);
stackelements.push(2);
stackelements.push(3);
stackelements.push(4);
stackelements.push(5);
stackelements.push(6);
stackelements.push(7);
stackelements.push(8);
stackelements.push(9);
stackelements.push(10);
console.log(stackelements.stackJS)
stackelements.push(11);

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
stackelements.pop();


// stackelements.stackSize();

stackelements.stackSize();
//console.log(stackelements.stackJS)