<template>
  <layout>
    <company-badge
      :name="company.name"
      :address="company.address"
      :avatar="company.avatar"
      :description="company.description"
    />
    <div id="content">
      <widget
        id="activities"
        title="Activities"
        no-padding
      >
        <activities-list
          :activities="company.activities"
        />
      </widget>
      <widget
        id="similar"
        title="Similar companies"
      >
        similar
      </widget>
      <widget
        id="spent"
        title="Company Spend History"
      >
        spent
      </widget>
      <widget
        id="spent2"
        title="Company Spend History"
      >
        spent2
      </widget>
    </div>
  </layout>
</template>

<script>
import Default from 'Layouts/Default.vue'
import CompanyBadge from 'Components/CompanyBadge.vue'
import Widget from 'Components/Widget.vue'
import ActivitiesList from 'Components/ActivitiesList.vue'

export default {
  components: {
    layout: Default,
    CompanyBadge,
    ActivitiesList,
    Widget
  },
  computed: {
    company() {
      return this.$store.getters['companies/selected']
    }
  }
}
</script>

<style lang="scss" scoped>
#content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 200px);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  grid-template:
    'activities similar'
    'activities spent'
    'activities spent2';

  #activities { grid-area: activities }
  #similar { grid-area: similar }
  #spent { grid-area: spent }
  #spent2 { grid-area: spent2 }
}
</style>