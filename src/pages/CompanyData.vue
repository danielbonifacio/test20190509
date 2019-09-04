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
          placeholder="e.g: Your Company Name"
        />
        <Input
          v-model.lazy="form.company.spend"
          label="Company Name"
          mask-money
          placeholder="e.g: $150,000"
        />
        <Input
          v-model.lazy="form.company.spendAbility"
          mask-money
          label="Company Name"
          placeholder="e.g: $150,000 - $330,000"
        />
      </div>
      <div class="text-area">
        <TextArea
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
import Modal from 'Components/Modal.vue'
import Button from 'Components/Button.vue'
import TextArea from 'Components/TextArea.vue'

export default {
  components: {
    layout: Default,
    Input,
    Modal,
    Button,
    TextArea,
  },
  data: () => ({
    modal: true,
    form: {
      company: {
        name: null,
        spend: null,
        notes: null
      }
    }
  })
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