<template>
  <div>
    <p>{{ msg }}</p>
    <button @click="$emit('emit')">emit</button>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: "zz",
    },
  },
  name: "HelloWorldHeader",
};
</script>
