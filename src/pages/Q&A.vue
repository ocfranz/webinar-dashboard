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
            <div class="list-category-wrapper">
                  <div class="list" v-for="category in categories" :key="category.toString()" >
                                <QACategory :name="category" :key="category.toString()"/>
                              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div class="chat-feed">
        <QAFeed />
      </div>
      <div class="webinar-video">video</div>
    </div>
  </div>
</template>

<script>
import Heading from "../components/UIHeading.vue";
import BaseIcon from "../components/icons/UiBaseIcon.vue";
import QACategory from "../components/UiQACategory.vue";
import QAFeed from '../components/UiQAFeed.vue'
export default {
  data : function(){
    return { categories : ['General','meetings','Design','Product', 'Design sprint', 'Marketing', 'development','Marketing','More']}
  },
  components: { Heading, BaseIcon, QACategory, QAFeed },
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

  .page-navigation{
    height: calc(100% - 50px);
  }

  .question-controllers {
    padding: 10px 0px 0px 0px;
    height: 50%;
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
    display: flex;
    flex-direction: column;
    height: 50%;
    .heading-categories {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0px 5px 0px;
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
  
    .list-category-wrapper{
      overflow-y: auto;
      -ms-overflow-style : none;
      scrollbar-width: none;
      &::-webkit-scrollbar{
        display: none;

      }
    }
  }
  .chat-feed {
    width: 55%;
    display: flex;
  }
  .webinar-video {
    width: 25%;
  }
}
</style>