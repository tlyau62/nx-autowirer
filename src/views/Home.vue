<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <HelloWorld>
      <template #header>
        <HelloWorldHeader v-autowired>
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

export default {
  name: "Home",
  components: {
    HelloWorld,
    HelloWorldHeader,
  },
};
</script>
