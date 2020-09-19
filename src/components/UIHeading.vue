<template>
  <span class="heading">{{children}}</span>
</template>

<script>
export default {
  name: "heading",
  props: {
    children: String
  }
};
</script>

<style lang="scss" scoped>
.heading {
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
}
</style>