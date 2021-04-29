<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <HelloWorld>
      <template #header>
        <HelloWorldHeader>
          Test
        </HelloWorldHeader>
      </template>
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import HelloWorldHeader from "@/components/HelloWorldHeader.vue";
import NxComponent from "../components/nx-component";

export default {
  name: "Home",
  components: {
    HelloWorld,
    HelloWorldHeader: NxComponent(HelloWorldHeader),
  },
  data() {
    return {
      test: {},
      msg: "asdf",
    };
  },
};
</script>
