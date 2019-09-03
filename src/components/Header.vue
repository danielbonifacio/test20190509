<template>
  <header>
    <!-- todo: header -->
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~Styles/_vars.scss";
@import "~Styles/_mixins.scss";

$header_bg: $primary;
$header_color: $foreground;
$header_height: 70px;

header {
  background-color: $header_bg;
  color: $header_color;
  height: $header_height;
  
  @include align-center;
}
</style>
