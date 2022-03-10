// 1. Identificar el contenedor que va a usar VUE
// 2. Crear la APP de Vue en el contenedor del paso 1.
// 3. Crear la estructura del framework vue
const appVue = {
    // Controlar los componentes del DOM
    data(){
        return{
            // esto está simulando esto => documento.getElementById("#correo").value
            mensajeAlerta:null,
            usuario:{
                correo:null
            }
        }
    },
    // Métodos y funciones que se van a utilizar en la aplicación
    methods:{
        obtenerValoresFormulario(){
            console.log(this.usuario);
            this.usuario={};
        }
    }
}

Vue.createApp(appVue).mount('#app-vue')