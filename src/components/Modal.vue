<template>
  <div>
    <div
      v-if="isOpen"
      class="modal"
    >
      <div
        v-click-outside="() => $emit('close')"
        class="inner"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "~Styles/_vars.scss";

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes pop {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;

  animation: fade .25s ease;

  position: fixed;
  background-color: rgba(0,0,0,.3);
  z-index: 10;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  .inner {
    min-width: 560px;
    border-radius: 5px;
    padding: 2rem;
    box-shadow: 0 3px 6px rgba($color, .2);
    background-color: $foreground;

    animation: pop .25s ease;
  }
}
</style>