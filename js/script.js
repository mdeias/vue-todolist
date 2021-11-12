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
            }

        ],

        // creo l'oggetto vuoto che verrà pushato all'interno dell'array
        testoUtente: {
            text: "",
            done: false
        }
    },

    methods:{
        // funzione che grazie allo splice mi permette di rimuovere un solo elemento partendo dall'indice degli elementi
        rimuoviToDo(index){
            this.listaToDo.splice(index,1)
        },
        // funzione che mi permette di pushiare l'oggetto compilato dall'utente nell'array
        pushToDo(){
            this.listaToDo.push(this.testoUtente);
            // resetto testoUtente ogni volta che aggiungo un oggetto
            this.testoUtente= {text: "", done: false}; 
        }
    }

})