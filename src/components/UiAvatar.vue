<template>
  <div class="avatar">
    <span>{{username.substring(0,2)}}</span>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: { username: { type: String, default: "Anonimous" } }
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #46d39a;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
  }
}
</style>