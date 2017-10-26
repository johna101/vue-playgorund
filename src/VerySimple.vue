<template>
  <div class='verysimple'>
    <h3 :class='bg' @click="applyStyle">It went {{bg}}</h3>
    <button v-on:click="applyStyle">Boom?</button>
  </div>
</template>

<script lang='ts'>
import { Component} from 'vue-property-decorator';
import Vue from 'vue'

@Component
export default class VerySimple extends Vue {

  bg = '';
  applyStyle() {
    if (this.bg !== 'boom')
      this.bg = 'boom'
    else
      this.bg = 'poof'
  }
}
</script>

<style>
  .verysimple {
    border: 1px solid black;
    border-radius: 3px;
    width: 50%;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
  }

  .boom {
    background-color: red;
    border-radius: 30px;
  }

  .poof {
    background-color: green;
    border-radius: 3px;
  }
</style>
