<template>
  <div class="activities-list">
    <ul>
      <li
        v-for="activity in activities"
        :key="activity.id"
        class="activity"
      >
        <div class="date">
          {{ formatDate(activity.date) }}
        </div>
        <div class="icon">
          <img
            ondragstart="return false"
            :src="getImgUrl(`${activity.icon}.png`)"
            alt=""
          >
        </div>
        <div class="message">
          <template v-if="activity.operation.type === 'replace'">
            <p>
              <a :href="activity.operation.replace.url">
                {{ activity.operation.replace.title }}
              </a>
              {{ ' replaced ' }}
              <span class="stroked">
                {{ company }}
              </span>
              {{ ' on ' }}
              <a :href="activity.operation.property.url">
                {{ activity.operation.property.amount }} property
              </a>
            </p>
          </template>
          <template v-else-if="activity.operation.type === 'launch'">
            <p>
              {{ company }} launched {{ activity.operation.service.title }}
            </p>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  computed: {
    activities() {
      return this.$store.getters['companies/selectedCompanyActivities']
    },
    company() {
      return this.$store.getters['companies/selectedCompanyName']
    }
  },
  methods: {
    formatDate(date) {
      return moment(date, 'DD/MM/YYYY').fromNow()
    },
    getImgUrl(pic) {
      return require('Images/icons/' + pic)
    }
  }
}
</script>

<style lang="scss">
@import "~Styles/_vars.scss";
@import "~Styles/_mixins.scss";

$border_color: lighten($primary, 50%);

.activities-list {
  height: 100%;
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    height: 100%;
    justify-content: space-between;

    li {
      width: 100%;
      padding: 1rem;

      &:not(:last-child) {
        border-bottom: 1px solid $border_color
      }

      display: flex;
      flex-wrap: nowrap;

      .date {
        height: 24px;
        line-height: 24px; // horizontal centralization

        min-width: 6rem;
        font-size: .9rem;

        color: lighten($color, 30%);
      }

      .icon {
        margin-right: 1rem;
        user-select: none;
      }

      .message {
        font-size: .95rem;
        a {
          color: lighten($primary, 15%);
          text-decoration: none;
        }

        span.stroked {
          text-decoration: line-through;
          color: lighten($color, 50%);
        }
      }
    }
  }
}
</style>