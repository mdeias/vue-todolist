const app = new Vue({

    el: '#app',

    data: {
        listaToDo: [
            {
                text: 'Cercare una destinazione',
                done: false
            },
            {
                text: 'Prenotare il volo',
                done: false
            },
            {
                text: "Chiamare l'albergo",
                done: false
            },
            {
                text: 'Preparare le valige',
                done: false
            },
            {
                text: "Rifornire l'auto",
                done: false
            },
        ]
    },

    methods:{
        //funzione che grazie allo splice mi permette di rimuovere un solo elemento partendo dall'indice degli elementi
        rimuoviToDo(index){
            this.listaToDo.splice(index,1)
        }
    }

})