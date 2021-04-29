<template>
  <div class="hello">
    <nx-autowirer :msg="msg" @emit="emit">
      <slot name="header">
        <HelloWorldHeader v-autowired />
      </slot>
    </nx-autowirer>
  </div>
</template>

<script>
import HelloWorldHeader from "./HelloWorldHeader";

export default {
  name: "HelloWorld",
  components: {
    HelloWorldHeader,
  },
  data() {
    return {
      msg: "12345",
    };
  },
  methods: {
    emit() {
      console.log("emit");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
