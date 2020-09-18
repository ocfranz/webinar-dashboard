<template>
  <button class="simple-button" :id="id" v-on:click="()=>handleOnClick()">{{children}}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    children: String,
    id: String,
    onClick: Function
  },
  methods: {
    handleOnClick() {
      this.$props.onClick();
    }
  }
};
</script>

<style lang="scss" scoped>
.simple-button {
  box-shadow: none;
  outline: none;
  padding: 10px 20px;
  font-size: 17px;
  text-transform: capitalize;
}
</style>