<template>
  <div class="feed-wrapper">
    <div class="feed-heading">
      Trending Popular Lasted
    </div>
    <div class="feed-content">
      fedd
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.feed-wrapper{
  display: flex;
  border-radius: 10px;
  background-color: #27292c;
  width: 100%;
  margin: 0px 15px 0px 0px;
 
  flex-direction: column;
  .feed-heading{
    padding: 0px 20px;
    height: 50px;
    position: sticky;
    display: flex;
    align-items: center;
    border-bottom: 3px solid darken(#2A2C30,5);
    color: #898A8C;
  }
  .feed-content{
    padding: 0px 20px;
  }
}

</style>