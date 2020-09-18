<template>
  <div class="brand">
    <div class="brand-wrapper">
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Brand"
};
</script>

<style lang="scss" scoped>
.brand {
  position: relative;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .brand-wrapper {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: #784fea;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .circle {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #ffffff;
    }
  }
}
</style>