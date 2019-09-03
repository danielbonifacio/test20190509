<template>
  <div
    id="layout"
    class="default"
  >
    <page-header />
    <slot />
  </div>
</template>

<script>
import Header from 'Components/Header.vue'
export default {
  components: {
    pageHeader: Header
  }
}
</script>

<style>

</style>