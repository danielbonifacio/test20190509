<template>
  <div class="input">
    <label>
      <span v-if="label">{{ label }}</span>
      <!-- <input
        v-if="maskMoney && value"
        v-money="money"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="e => $emit('input', e.target.value)"
      >
      <input
        v-else
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="e => $emit('input', e.target.value)"
      > -->
      <div
        class="input"
        :class="{ invalid: !valid && shouldValidate }"
      >
        <span
          :class="{ hide: (!!minimum || !!maximum) }"
          class="placeholder"
        >{{ placeholder }}</span>
        <template v-if="(!!minimum || !!maximum)">
          <input
            v-model="minimum"
            v-money="money"
            class="minimum"
            type="text"
          >
          <input
            v-model="maximum"
            v-money="money"
            class="maximum"
            type="text"
          >
        </template>
        <template v-else>
          <input
            v-model="minimum"
            class="minimum"
            type="text"
          >
          <input
            v-model="maximum"
            class="maximum"
            type="text"
          >
        </template>
        <div
          class="clear"
          @click="clear"
        >
          Clear
        </div>
      </div>
    </label>
  </div>
</template>

<script>
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
    label: {
      type: String,
      default: null
    },
    value: {
      type: Object,
      default: null
    },
    valid: {
      type: Boolean,
      default: true
    },
  },
  data: () => ({
    shouldValidate: false,
    internalValues: {
      minimum: null,
      maximum: null,
    },
    money: {
      decimal: '.',
      thousands: ',',
      prefix: '$',
      precision: 2,
      masked: false
    }
  }),

  computed: {
    minimum: {
      get() {
        return this.value.minimum
      },

      set(value) {
        this.shouldValidate = true
        if (value !== this.value.minimum) {
          this.$emit('input', {
            minimum: value,
            maximum: this.value.maximum
          })
        }
      }
    },
    maximum: {
      get() {
        return this.value.maximum
      },

      set(value) {
        this.shouldValidate = true
        if (value !== this.value.maximum) {
          this.$emit('input', {
            maximum: value,
            minimum: this.value.minimum
          })
        }
      }
    }
  },

  methods: {
    unmask(value) {
      const v = value
      return parseFloat(
          value
            .replace(/\$/g, '')
            .replace(/,/g, '')
          )
          .toFixed(2)
    },

    clear() {
      this.$emit('input', {
        maximum: null,
        minimum: null
      })
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
      top: -1.5rem;

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

    .input {
      position: relative;
      padding: .7rem;
      border-radius: 5px;
      box-shadow: 0 2px 3px rgba($color, .15);
      border: 1px solid $border_color;

      transition: .25s ease;
      outline: none;
      &:hover {
        border-color: lighten($primary, 30%);
      }
      &:focus-within,
      &:active {
        border-color: lighten($primary, 5%);
      }

      &.invalid {
        border-color: red;
      }

      .placeholder {
        color: lighten($primary, 45%);
        text-transform: none;

        &.hide {
          opacity: 0;
        }
      }

      input {
        color: $primary;
        font-family: Roboto, sans-serif;
        height: 100%;
        width: 50%;
        padding: 0 .7rem;
        background: transparent;
        border: none;
        display: inline-block;
        outline: none;
        
        position: absolute;
        top: 0;
        
        &.minimum {
          left: 0;
        }

        &.maximum {
          right: 0;
        }
      }
    }
  }
}
</style>