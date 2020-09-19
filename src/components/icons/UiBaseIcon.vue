<template>
  <span class="ui-icon">
    <component :is="iconName" :color="color" :size="size"></component>
  </span>
</template>

<script>
import message from "./message.vue";
import mail from "./mail.vue";
import user from "./user.vue";
import calendar from "./calendar.vue";
import chart from "./chart.vue";
import layout from "./layout.vue";
import file from "./file.vue";
import videoIcon from "./video.vue";
import plus from "./plus.vue";
import hash from "./hash.vue";
export default {
  name: "UiBaseIcon",
  props: {
    iconName: { type: String, default: "message" },
    color: { type: String, default: "#69747f" },
    size: { type: String, default: "25px" }
  },
  components: {
    message,
    mail,
    user,
    calendar,
    chart,
    layout,
    videoIcon,
    file,
    plus,
    hash
  }
};
</script>

<style>
.ui-icon {
  cursor: pointer;
}
</style>