<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <p>Person: {{person.name}} is {{person.age}}</p>
    <span>{{name}}
      <button @click="reset">Reset to Fred</button>
    </span>
    <monkey :name='name' :person='person' v-on:save='save'>
      <div slot='title'>I Am {{person.name}}!</div>
      <div slot='content'>And I am {{person.age}} year old</div>
    </monkey>
    <br>
    <monkey-uncle :name='name' v-on:save='save'></monkey-uncle>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Person } from "./Monkey.vue";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      name: "Fred",
      person: { name: "Lucas", age: 6 }
    };
  },
  methods: {
    save: function(val: string) {
      console.log("In Save", val);
      this.name = val;
    },
    reset: function() {
      this.name = "Freed";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
