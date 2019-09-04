<template>
  <layout>
    <company-badge
      :name="company.name"
      :address="company.address"
      :avatar="company.avatar"
      :description="company.description"
    />
    <div id="content">
      <div class="col">
        <widget
          id="activities"
          title="Activities"
          no-padding
        >
          <activities-list
            :activities="company.activities"
          />
        </widget>
      </div>
      <div class="col">
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
  display: flex;
  
  margin: 0 -.5rem;
  > .col {
    flex: 1;
    padding: .5rem;

    display: flex;
    flex-direction: column;

    .widget {
      width: 100%;
      flex: 1;
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>