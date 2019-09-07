<template>
  <layout>
    <Modal
      :is-open="modal"
      @close="modal = false"
    >
      <TextArea
        v-model="form.company.notes"
        label="Additional Notes"
        placeholder="e.g: Good Tech Company"
      />
      <div class="submit">
        <Button
          label="save"
          @click="modal = false"
        />
      </div>
    </Modal>
    <div class="company-data">
      <div class="page-header">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi assumenda sunt mollitia reiciendis ad deleniti maiores corporis laudantium distinctio repellat?</p>
      </div>
      <div
        class="col"
        style="width: 50%"
      >
        <Input
          v-model="form.company.name"
          label="Company Name"
          :valid="validateName"
          placeholder="e.g: Your Company Name"
        />
        <Input
          v-model.lazy="form.company.spend"
          label="Company Spend"
          :valid="validateSpend"
          mask-money
          placeholder="e.g: $150,000"
          positive-only
        />
        <MultipleInput
          v-model.lazy="form.company.spendAbility"
          :valid="validateSpendAbility"
          mask-money
          label="Company Spend Ability"
          placeholder="e.g: $150,000 - $330,000"
        />
      </div>
      <div class="text-area">
        <TextArea
          v-model="form.company.notes"
          label="Notes"
          placeholder="e.g: Good Tech Company"
          @click.native.stop="modal = true"
        />
      </div>
    </div>
  </layout>
</template>

<script>
import Default from 'Layouts/Default.vue'
import Input from 'Components/Input.vue'
import MultipleInput from 'Components/MultipleInput.vue'
import Modal from 'Components/Modal.vue'
import Button from 'Components/Button.vue'
import TextArea from 'Components/TextArea.vue'

export default {
  components: {
    layout: Default,
    Input,
    MultipleInput,
    Modal,
    Button,
    TextArea,
  },
  data: () => ({
    modal: false,
    form: {
      company: {
        name: null,
        spend: null,
        spendAbility: {
          minimum: null,
          maximum: null
        },
        notes: null
      }
    }
  }),
  computed: {
    validateName() {
      const value = this.form.company.name
      return !!value
    },
    validateSpend() {
      const value = this.unmask(this.form.company.spend)
      return !!value && value > 0
    },
    validateSpendAbility() {
      const min = parseFloat(this.unmask(this.form.company.spendAbility.minimum))
      const max = parseFloat(this.unmask(this.form.company.spendAbility.maximum))
      
      return (!!min && !!max)
        && min < max
    }
  },
  methods: {
    unmask(value) {
      return value
        && parseFloat(
          value
            .replace(/\$/g, '')
            .replace(/,/g, '')
          )
          .toFixed(2)
    }
  }
}
</script>

<style lang="scss">
@import "~Styles/_vars.scss";

.company-data {
  border-radius: 5px;
  padding: 1rem;
  border: 1px solid lighten($primary, 50%);
  background-color: $foreground;

  .page-header {
    font-size: .9rem;
    line-height: 1.6rem;
    margin-bottom: 2rem;
  }

  .text-area {
    margin-top: 2rem;
  }

}
.submit {
  display: flex;
  justify-content: flex-end;
}
</style>