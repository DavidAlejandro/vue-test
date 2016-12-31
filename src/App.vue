<template>
  <div id="app">
    <div class="buttons-container">
      <span v-on:click="clickOnGet"><router-link class="btn" id="go-to-get" to="/get-request">Go to GET</router-link></span>
      <span v-on:click="clickOnPost"><router-link class="btn" id="go-to-post" to="/post-request">Go to Post</router-link></span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
    clickOnGet: function(){
      document.getElementById("go-to-get").className = "btn button-disabled";//Sets a disabled style to the button clicked.
      document.getElementById("go-to-post").className = "btn";//Removes disabled style from the other button.
    },
    clickOnPost: function(){
      document.getElementById("go-to-get").className = "btn";//Removes disabled style from the other button.
      document.getElementById("go-to-post").className = "btn button-disabled";//Sets a disabled style to the button clicked.
    }
  }
}
</script>

<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(38, 46, 76);
  height: 100%;
}


.buttons-container {
    position: absolute;
    width: 20%;
    top: 40%;
    left: 40%;
}

.btn {
  margin-left: 5px;
  background-color: rgb(253, 190, 78);
  padding: 4px 20px;
  border-radius: 3px;
  color: rgb(115, 88, 39);
}

.btn:hover{
  background-color: rgba(253, 190, 78, 0.8);
}

a{
  text-decoration: none;
}

.button-disabled{
  opacity: 0.5;
}

</style>
