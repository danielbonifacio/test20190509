<template>
  <div
    id="layout"
    class="default"
  >
    <page-header />
    <div class="container">
      <nav class="sidebar">
        <ul>
          <li
            v-for="item in navbar"
            :key="item.route"
          >
            <a
              :class="{ active: $route.path === item.route }"
              @click="goTo(item.route)"
            >{{ item.title }}</a>
          </li>
        </ul>
      </nav>
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import Header from 'Components/Header.vue'
export default {
  components: {
    pageHeader: Header
  },
  data: () => ({
    navbar: [
      {
        title: 'Company data',
        route: '/data'
      },
      {
        title: 'Company page',
        route: '/'
      }
    ]
  }),
  methods: {
    goTo(route) {
      this.$router.push(route)
        .catch(err => {
          err.name === 'NavigationDuplicated'
            ? null
            : console.error(err)
        })
    }
  }
}
</script>

<style lang="scss">
@import "~Styles/_vars.scss";
@import "~Styles/_mixins.scss";

$navbar_border: darken($foreground, 15%);

#layout.default {
  .container {
    max-width: 960px;
    margin: 1rem auto 0;

    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: calc(80vh);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  .sidebar {
    ul {
      list-style: none;
      border-radius: 5px;
      border: 1px solid $navbar_border;

      li {
        border-bottom: 1px solid $navbar_border;

        font-size: .8rem;
        font-weight: 600;
        text-transform: uppercase;

        &:first-child,
        &:first-child a {
          border-top-right-radius: 5px;
          border-top-left-radius: 5px;
        }

        &:last-child,
        &:last-child a {
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }

        a {
          background: $foreground;
          text-decoration: none;
          color: lighten($primary, 10%);

          transition: .15s ease;
          border-left: 0 solid $primary;

          @include align-center;
          height: 100%;
          width: 100%;
          padding: 1rem;

          &.active,
          &:hover,
          &:focus {
            outline: none;
            border-left: .2rem solid $primary;
            background-color: rgba($foreground, .7);
          }

          &.active {
            cursor: default;
          }
        }
      }
    }
  }
}
</style>