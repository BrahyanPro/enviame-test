const app = new Vue({
    el: '#app',
    data: {
        message: 'Desde el corazon para ser parte de Enviame!',
        num1: 1,
        num2: 10,
    },
    methods: {
        rango: function range(start, end) {
            return Array.from({ length: end - start + 1 }, (_, i) => i);
        },
        validarPrimo: function(numero) {
            for (let i = 2, raiz = Math.sqrt(numero); i <= raiz; i++)
                if (numero % i === 0) return;
            return numero > 1 && numero;
        },
        obtenerPrimo: function() {
            const numeros = this.rango(this.num1, this.num2);
            const primos = numeros.map((numero) => this.validarPrimo(numero));
            return primos.filter((num) => typeof num === 'number');
        },
    },
    computed: {
        mostraPrimo: function() {
            return this.obtenerPrimo();
        },
    },
});