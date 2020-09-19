<template>
  <div class="page">
    <div class="page-wrapper">
      <div class="page-sidebar">Q&A</div>
      <div class="chat-feed">fedd</div>
      <div class="webinar-video">video</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.page {
  width: calc(100% - 70px);
  height: 100%;
  background-color: #202225;
  color: #ffffff;

  .page-wrapper {
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    display: flex;
  }
  .page-sidebar {
    width: 20%;
  }
  .chat-feed {
    width: 55%;
    background-color: #27292c;
  }
  .webinar-video {
    width: 25%;
  }
}
</style>