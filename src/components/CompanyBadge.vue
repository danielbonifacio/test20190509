<template>
  <div class="company-badge">
    <div class="avatar">
      <img
        :src="avatar"
        :alt="`${name}'s avatar'`"
      >
    </div>
    <div class="info">
      <h2 class="name">
        {{ name }}
      </h2>
      <div class="address">
        {{ address }}
      </div>
    </div>
    <div class="description">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import "~Styles/_vars.scss";
@import "~Styles/_mixins.scss";

.company-badge {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  .avatar {
    @include shadow;
    background-color: $foreground;
    border-radius: 5px;

    width: 70px;
    height: 70px;

    user-select: none;
    margin-right: 1rem;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .info {
    flex-grow: 1;
    flex-wrap: wrap;
    display: flex;
    align-content: center;

    .name {
      width: 100%;
      font-size: 2rem;
      font-weight: 500;
      color: lighten($color, 10%);
    }

    .address {
      width: 100%;
      font-size: .9rem;
      color: lighten($color, 25%);

      &::before {
        content: '';
        display: inline-block;
        width: 9px;
        height: 14px;
        background-image: url(~Images/location.png);
        background-repeat: no-repeat;
        margin-right: .2rem;

        // visual fix
        transform: translateY(2px) translateX(2px);
      }
    }
  }

  .description {
    font-size: .9rem;
    line-height: 1.4rem;
    margin-top: 1rem;
  }
}
</style>