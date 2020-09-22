<template>
  <div class="page">
    <div class="page-wrapper">
      <div class="page-sidebar">
        <Heading :children="'Q&A'" />
        <div class="page-navigation">
          <div class="question-controllers">
            <ul>
              <li>All</li>
              <li>New</li>
              <li>Spam</li>
              <li>Trash</li>
              <li>More</li>
            </ul>
          </div>
          <div class="list-categories">
            <div class="heading-categories">
              <span class="heading">categories</span>
              <button role="button">
                <BaseIcon :iconName="'plus'" :size="'20px'"  />
              </button>
            </div>
            <div class="list" v-for="category in categories" :key="category.toString()" >
              <QACategory :name="category" :key="category.toString()"/>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-feed">fedd</div>
      <div class="webinar-video">video</div>
    </div>
  </div>
</template>

<script>
import Heading from "../components/UIHeading.vue";
import BaseIcon from "../components/icons/UiBaseIcon.vue";
import QACategory from "../components/UiQACategory.vue";
export default {
  data : function(){
    return { categories : ['Design', 'Product', 'Design sprint', 'Marketing', 'More']}
  },
  components: { Heading, BaseIcon, QACategory },
};


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
    padding: 10px 20px 10px 20px;
    display: flex;
  }
  .page-sidebar {
    width: 20%;
    padding-right: 25px;
  }

  .question-controllers {
    padding: 20px 0px 0px 0px;
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      li {
        padding: 10px 0px;
        cursor: pointer;
      }
    }
  }

  .list-categories {
    .heading-categories {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .heading {
        text-transform: capitalize;
        color: #69747f;
        font-size: 17px;
        margin-top: -5px;
        font-weight: bold;
      }
      button {
        border: none;
        background-color: transparent;
        border: none;
        box-shadow: none;
        outline: none;

        &:focus {
          box-shadow: none;
          outline: none;
        }
      }
    }
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