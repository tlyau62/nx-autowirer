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
    msg: String,
  },
};
</script>
