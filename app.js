"use strict";
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
var mystring;
mystring = 'helllo';
mystring = 1234;
var mynumber;
mynumber = 1234;
mynumber = 1234.50;
mynumber = 'hello';
var myboolean;
myboolean = true;
myboolean = 1234;
