<template>
  <div class='monkey'>
    <h1>Monkey</h1>
    <slot></slot>
    <h1><slot name="title"></slot></h1>
    <p class="age"><slot name="content"></slot></p>
    <p>Name is {{name}}</p>
    <p>New name is {{newName}}</p>
    <span><input type="text" v-model='newName'>
      <button @click='save'>Save</button>
    </span>
    <p>Caps name is: {{CapsName}}</p>
    <p>Person: {{person.name}} is {{person.age}}</p>
    <p>Number of records returned: {{posts.length}}</p>
    <br>
      <button @click='changeComp'>Change Component</button>
    <component v-bind:is='comp'></component>
    <very-simple></very-simple>
    <very-simple></very-simple>
    <very-simple></very-simple>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import axios from 'axios';
import { Component, Prop, Watch } from 'vue-property-decorator';
import VerySimple from './VerySimple.vue';

export interface Person {
  name: string;
  age: number;
}

var homecomp = {
  template: '<p>This is home!!!!</p>'
}

var awaycomp = {
  template: '<p>Now its away!!!</p>'
}

@Component({
  components: {VerySimple}
})
export default class Monkey extends Vue {
  @Prop({default: 'John'}) 
  name: string;

  posts: any[] = [];
  errors: any[];
  comp = homecomp;

  newName: string = this.name;

  @Prop()
  person?: Person;

  async created() {
     // async / await version (created() becomes async created())
    
    try {
      const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
      this.posts = response.data;
      console.log(this.posts);
    } catch (e) {
      this.errors.push(e as never)
    }
  }
  
  save() { 
    this.$emit("save", this.newName);
    this.person.age++; 
    };
  
  changeComp() {
    if (this.comp === homecomp) {
      this.comp = awaycomp;
    } else {
      this.comp = homecomp;
    }
  }
    
  @Watch('name')
  onNameChanged(value: string, oldValue: string) {
    this.newName = value;
    }
  
  get CapsName():string {
      return (this.name as string).toUpperCase();
    }
  
};

</script>

<style lang='css'>
.monkey {
  width: 50vw;
  margin: auto;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
}

.age {
  width: 50%;
  margin: auto;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  color:lightcyan;
  background-color: lightseagreen
}
</style>
