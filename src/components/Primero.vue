<template>
  <div>
      <h1> 
          {{ mensaje }}
      </h1>
      
      <input v-model="datoUno" type="text" /> <br>
    <button @click="borrar()">borrar</button> <br>
    <button @click="agregar()">agregar</button> <br>
    <button @click="reset()">reset</button> <br>
  </div>
</template>

<script>
export default {
        data(){
            return{
                mensaje: "hello world", 
                datoUno: null,   
            };
        },
        methods:{
            borrar(){
                this.datoUno = "";

            },
            agregar(){
                this.mensaje = this.mensaje + this.datoUno
            },
            reset(){
                this.mensaje = "hello world"
                

            },
        }
};
</script>

<style>


</style>
