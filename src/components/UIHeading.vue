<template>
  <div class="heading-wrapper">
    <span class="heading">{{children}}</span>
  </div>
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
.heading-wrapper{
  height: 40px;
  display: flex;
  align-items: center;
}
.heading {
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
}
</style>