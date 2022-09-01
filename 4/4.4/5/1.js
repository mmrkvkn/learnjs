'use strict';

let calculator = {

    read() {
        this.a = +prompt('Введите а');
        this.b = +prompt('Введите b');
    },
    sum() {
        this.check();
            return this.a + this.b;
        
    },
    mul() {
        this.check();
        return this.a * this.b;
    },  

    check() {
        if (typeof this.a === 'undefined' || typeof this.b === 'undefined') {
            this.read();
        }
    }
}


alert(calculator.mul());