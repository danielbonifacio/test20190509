<template>
  <button @click="$emit('click', $event)">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ['label']
}
</script>

<style lang="scss" scoped>
@import "~Styles/_vars.scss";

button {
  color: $foreground;
  background-color: $primary;
  text-transform: uppercase;
  padding: .5rem .7rem;
  border: none;
  border-radius: 5px;
  min-width: 100px;
  font-size: .8rem;

  transition: .25s ease;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0 0 0 4px rgba($primary, .3);
    background-color: darken($primary, 5%);
    outline: none;
  }
}
</style>