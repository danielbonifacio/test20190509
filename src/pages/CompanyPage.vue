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
  computed: {
    company() {
      return this.$store.getters['companies/selected']
    }
  }
}
</script>

<style>

</style>