<template>
  <layout>
    <company-badge
      v-if="company"
      :name="company.name"
      :address="company.address"
      :avatar="company.avatar"
      :description="company.description"
    />
    <div id="content">
      <template v-if="company">
        <div class="col">
          <widget
            id="activities"
            title="Activities"
            no-padding
          >
            <activities-list />
          </widget>
        </div>
        <div class="col">
          <widget
            id="similar"
            title="Similar companies"
          >
            <companies-list
              :companies="similar"
            />
          </widget>
          <widget
            id="spent"
            title="Company Spend History"
          >
            <line-chart
              :styles="{ height: '100px' }"
              :chartdata="chartdata"
            />
          </widget>
          <widget
            id="spent2"
            title="Company Spend History"
          >
            <companies-list
              :companies="company.spendHistory"
            />
          </widget>
        </div>
      </template>
      <template v-else>
        loading....
      </template>
    </div>
  </layout>
</template>

<script>
import numeral from 'numeral'
import Default from 'Layouts/Default.vue'
import CompanyBadge from 'Components/CompanyBadge.vue'
import Widget from 'Components/Widget.vue'
import ActivitiesList from 'Components/ActivitiesList.vue'
import CompaniesList from 'Components/CompaniesList.vue'
import LineChart from 'Components/LineChart.js'

export default {
  components: {
    layout: Default,
    CompaniesList,
    CompanyBadge,
    ActivitiesList,
    LineChart,
    Widget
  },
  computed: {
    similar() {
      return this.$store.getters['companies/similar']
    },
    company() {
      return this.$store.getters['companies/selected']
    },
    chartdata() {
      return {
        labels: ['0', '2', '4', '6', '8', '10', '12'],
        datasets: [
          {
            label: 'Spent',
            backgroundColor: 'rgba(45,202,155, .3)',
            pointBorderColor: 'transparent',
            borderColor: 'rgb(45,202,155)',
            pointBackgroundColor: 'transparent',
            data: this.company.spendHistoryChart || []
          }
        ]
      }
    }
  },
  mounted() {
    this.$store.dispatch('companies/fetchCompany', 1)
  }
}
</script>

<style lang="scss" scoped>
#content {
  display: flex;
  
  margin: 0 -.5rem;
  > .col {
    flex: 1;
    max-width: 50%;
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