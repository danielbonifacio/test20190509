<template>
  <layout>
    <company-badge
      :name="company.name"
      :address="company.address"
      :avatar="company.avatar"
      :description="company.description"
    />
    todo: company page
  </layout>
</template>

<script>
import Default from 'Layouts/Default.vue'
import CompanyBadge from 'Components/CompanyBadge.vue'

export default {
  components: {
    layout: Default,
    CompanyBadge
  },
  data: () => ({
    company: {
      name: 'Microsoft',
      address: 'Redmond, WA, USA',
      avatar: 'https://www.freepnglogos.com/uploads/microsoft-window-logo-emblem-0.png',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid rerum velit ut similique saepe consequuntur possimus quas vel fugit optio?'
    }
  })
}
</script>

<style>

</style>