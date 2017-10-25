<template>
  <div>
    <h3 @="applyStyle">This is very simple</h3>
    <button @click="applyStyle">Boom?</button>
  </div>
</template>

<script lang='ts'>
import { Component} from 'vue-property-decorator';
import Vue from 'vue'

@Component
export default class VerySimple extends Vue {
  applyStyle() {
    alert('Boom');
  }
}
</script>

<style>

</style>
