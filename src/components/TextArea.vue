<template>
  <div class="text-area">
    <label>
      <span v-if="label">{{ label }}</span>
      <textarea
        :placeholder="placeholder"
        :value="value"
        @input="e => $emit('input', e.target.value)"
      />
    </label>
  </div>
</template>

<script>
// Or as a directive
import { VMoney } from 'v-money'

export default {
  directives: {
    'money': VMoney
  },
  props: {
    placeholder: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    maskMoney: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    }
  },
  data: () => ({
    money: {
      decimal: '.',
      thousands: ',',
      prefix: '$',
      precision: 2,
      masked: false
    }
  })
}
</script>

<style lang="scss" scoped>
@import "~Styles/_vars.scss";

$border_color: lighten($primary, 55%);

.text-area {
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  label {
    display: flex;
    flex-direction: column;

    span {
      text-transform: uppercase;
      color: lighten($color, 50%);
      font-size: .75rem;
      margin-bottom: 0.3rem;
    }

    textarea {
      padding: .7rem;
      color: $primary;
      border-radius: 5px;
      box-shadow: 0 2px 3px rgba($color, .15);
      border: 1px solid $border_color;
      font-family: Roboto, sans-serif;
      resize: vertical;
      min-height: 200px;

      transition: border-color .25s ease;
      outline: none;
      &:hover {
        border-color: lighten($primary, 30%);
      }
      &:focus,
      &:active {
        border-color: lighten($primary, 5%);
      }

      &::placeholder {
        color: lighten($primary, 45%);
      }
    }
  }
}
</style>