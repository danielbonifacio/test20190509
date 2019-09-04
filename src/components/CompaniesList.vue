<template>
  <div class="companies-list">
    <ul>
      <li
        v-for="company in companies"
        :key="company.id"
      >
        <div class="icon">
          <img
            :src="getImage(company.logo)"
            :alt="`${company.name} logo`"
          >
        </div>
        <div class="info">
          <div
            v-if="company.name"
            class="name"
          >
            <a :href="company.url">
              {{ company.name }}
            </a>
          </div>
          <div
            v-if="company.description"
            class="description"
          >
            <p>{{ company.description }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    companies: {
      type: Array,
      required: true
    },
  },
  methods: {
    getImage(logo) {
      return require(`Images/logos/${logo}.png`)
    }
  }
}
</script>

<style lang="scss">
@import "~Styles/_vars.scss";
@import "~Styles/_mixins.scss";

.companies-list {
  ul {
    list-style: none;

    li {
      display: flex;
      align-content: center;
      align-items: center;

      &:not(:last-child) {
        margin-bottom: 1rem;
      }

      .icon {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba($color, .3);
        
        margin-right: 1rem;
        
        display: flex;
        justify-content: center;
        align-items: center;

        user-select: none;
      }

      .info {
        font-size: .95rem;
        a {
          text-decoration: none;
          color: lighten($primary, 15%);
        }

        .name:not(:last-child) {
          margin-bottom: .5rem;
        }

        .description {
          color: lighten($color, 20%);
          p {
            // prevent long text to break layout
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 70%;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>