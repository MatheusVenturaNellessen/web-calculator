class Calculator {
    constructor() {
        this.display = document.querySelector('.display');
    }

    start() {
        document.addEventListener('click', e => {
            const el = e.target;
            
            if(el.classList.contains('operating')) {
                this.displayOperatings(el.innerHTML);
            }

            if(el.id === 'btn-clear') {
                this.clearDisplay();
            }

            if(el.classList.contains('btn-delete')) {
                this.deleteDisplay();
            }

            if(el.id === 'btn-equal') {
                this.calculate(this.display.value);
            }
        });

        this.display.addEventListener('keydown', e => {
            const kc = e.keyCode;

            if(kc === 13) {
                this.calculate(this.display.value);
            }
        });
    }

    displayOperatings(operatings) {
        this.display.value += operatings;
    }

    clearDisplay() {
        this.display.value = '';
    }

    deleteDisplay() {
        this.display.value = this.display.value.slice(0, -1);
    }

    calculate(count) {
        try {
            const result = eval(count);
            this.display.value = result;
        } catch(e) {
            console.warn(e);
            alert('Conta inválida!');
        }
    }
}

const c1 = new Calculator();

c1.start();
