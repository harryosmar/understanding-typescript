class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);

let mystring : string;
mystring = 'helllo';
mystring = 1234;


let mynumber : number;
mynumber = 1234;
mynumber = 1234.50;
mynumber = 'hello';

let myboolean : boolean;
myboolean = true;
myboolean = 1234;