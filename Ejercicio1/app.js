const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        num1: 1,
        num2: 10,
    },
    methods: {
        rango: function range(start, end) {
            if (start === end) return [start];
            return [start, ...range(start + 1, end)];
        },
        validarPrimo: function(numero) {
            for (let i = 2, raiz = Math.sqrt(numero); i <= raiz; i++)
                if (numero % i === 0) return;
            return numero > 1 && numero;
        },
        obtenerPrimo: function() {
            const numeros = this.rango(parseInt(this.num1), parseInt(this.num2));
            const primos = numeros.map((numero) => this.validarPrimo(numero));
            return primos.filter((e) => typeof e === 'number');
        },
    },
    computed: {
        mostraPrimo: function() {
            return this.obtenerPrimo();
        },
    },
});