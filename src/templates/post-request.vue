<template>
  <div class="post-container">
    <div class="template-content">
        <a v-on:click="makeGetRequest">Make a POST Request!</a>
        <br>
        <br>
        <div id="loader" class="hidden-loader"></div>
        <h2 class="message">
          {{this.response}}
        </h2>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
  Vue.use(VueResource);
    export default{
        data: function() {
          return {
            response: ""
          }
        },
         methods: {
          makeGetRequest: function (event) {
            document.getElementById("loader").className = ""; //makes loader visible
            //Makes post request to 'http://demo2449336.mockable.io/goodbye'.
            this.$http.post('http://demo2449336.mockable.io/goodbye').then((response) => {
              document.getElementById("loader").className = "hidden-loader"; //hides loader when gets a response from server.
              this.response = response.body.msg;
              }, (error) => {
                // error callback
            });
          }
    }
  }
</script>

<style scoped>

  .post-container {
    height: 100%;
  }

  .template-content{
    position: absolute;
    width: 18%;
    top: 55%;
    left: 41.5%;
  }

  a{
    background-color: rgb(41, 155, 208);
    padding: 4px 20px;
    border-radius: 3px;
    color: white;
    border: none;
    cursor: pointer;
  }

  a:hover{
    background-color: rgba(41, 155, 208, 0.8);
  }

  .message{
    color: white;
  }

  #loader {
    margin-left: 45%;
    border: 2px solid #f3f3f3; /* Light grey */
    border-top: 2px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 15px;
    height: 15px;
    animation: spin 2s linear infinite;
  }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .hidden-loader{
      display: none;
    }

</style>
