<template>
  <div class="input">
    <label>
      <span v-if="label">{{ label }}</span>
      <input
        v-if="maskMoney && value"
        v-money="money"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        :class="{ invalid: !valid && shouldValidate }"
        @input="emit"
        @blur="validate"
      >
      <input
        v-else
        :type="type"
        :placeholder="placeholder"
        :value="value"
        :class="{ invalid: !valid && shouldValidate }"
        @input="emit"
        @blur="validate"
      >
      <div
        class="clear"
        @click="clear"
      >
        Clear
      </div>
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
    },
    valid: {
      type: Boolean,
      default: true
    },
  },
  data: () => ({
    shouldValidate: false,
    money: {
      decimal: '.',
      thousands: ',',
      prefix: '$',
      precision: 2,
      masked: false
    }
  }),
  methods: {
    validate() {
      this.shouldValidate = true
    },
    unmask(value) {
      const v = value
      return parseFloat(
          value
            .replace(/\$/g, '')
            .replace(/,/g, '')
            .replace(/-/g, '')
          )
          .toFixed(2)
    },
    emit(event) {
      this.$emit('input', event.target.value)
    },
    clear() {
      this.emit({ target: { value: null } })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~Styles/_vars.scss";

$border_color: lighten($primary, 55%);

.input {
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  label {
    display: flex;
    flex-direction: column;
    position: relative;

    span {
      text-transform: uppercase;
      color: lighten($color, 50%);
      font-size: .75rem;
      margin-bottom: 0.3rem;
    }

    .clear {
      color: $foreground;
      background-color: $primary;
      padding: .1rem .2rem;
      border-radius: 5px;
      
      text-transform: lowercase;
      font-size: .7rem;
      
      position: absolute;
      right: .5rem;

      visibility: hidden;
      opacity: 0;

      cursor: pointer;
      transition: .25s ease;
    }

    &:focus-within {
      .clear {
        opacity: 1;
        visibility: visible;
      }
    }

    input {
      padding: .7rem;
      color: $primary;
      border-radius: 5px;
      box-shadow: 0 2px 3px rgba($color, .15);
      border: 1px solid $border_color;
      font-family: Roboto, sans-serif;

      transition: .25s ease;
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

      &.invalid {
        border-color: red;
      }
    }
  }
}
</style>