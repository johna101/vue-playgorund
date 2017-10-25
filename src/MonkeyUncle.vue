<template>
  <div class='monkey'>
    <h1>Monkeys uncle</h1>
    <p>Name is {{name}}</p>
    <p>New name is {{newName}}</p>
    <span><input type="text" v-model='newName'>
      <button @click='save'>Save</button>
    </span>
    <p>Caps name is: {{CapsName}}</p>
  </div>
</template>

<script lang='ts'>
interface Person {
  name: string;
  age: number;
}

export default {
  props: ["name"],
  data(): any {
    return {
      newName: this.name
    };
  },
  methods: {
    save: function() {
      this.$emit("save", this.newName);
    }
  },
  watch: {
    name: function(name) {
      this.newName = name;
    }
  },
  computed: {
    CapsName: function():string {
      return (this.name as string).toUpperCase();
    }
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
</style>
