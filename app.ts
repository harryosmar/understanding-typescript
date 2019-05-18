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

// tupple
let hobbies: [string, string, number] = ['eat', 'sleep', 100];
hobbies.push(11);
console.log(hobbies);


// enum
enum Color {
    Gray,
    Green,
    Blue = 8
};

let myColor: Color = Color.Blue;
console.log(myColor, Color);