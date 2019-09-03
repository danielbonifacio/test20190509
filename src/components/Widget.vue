<template>
  <div class="widget">
    <div class="title">
      {{ title }}
    </div>
    <div
      class="body"
      :class="{ 'no-padding': noPadding }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    noPadding: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "~Styles/_vars.scss";
@import "~Styles/_mixins.scss";

$border_color: lighten($primary, 50%);

.widget {
  background-color: $foreground;
  border-radius: 5px;
  border: 1px solid $border_color;

  .title {
    border-bottom: 1px solid $border_color;
    padding: 1rem;

    text-transform: uppercase;
    font-size: .8rem;
    font-weight: 600;
    color: lighten($color, 30%);

    // visual fix
    letter-spacing: .02rem;
  }

  .body {
    &:not(.no-padding) {
      padding: 1rem;
    }
  }
}
</style>