<template>
  <div class="home">
    <div class="tab">
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="all" title="全部"/>
        <mu-tab value="good" title="精华"/>
        <mu-tab value="weex" title="Weex"/>
        <mu-tab value="share" title="分享"/>
        <mu-tab value="ask" title="问答"/>
        <mu-tab value="job" title="招聘"/>
      </mu-tabs>
    </div>
    <div class="container">
      <div class="container">
        <!--<customScroll :article="article"></customScroll>-->
        <articleList :article="article"></articleList>
      </div>
    </div>
  </div>
</template>

<script>
  import customScroll from '@/components/infiniteScroll.vue'
  import articleList from '@/components/articleList.vue'

  import axios from 'axios'
  export default {
    data () {
      return {
        activeTab: 'all',
        article: [],
        test: ''
      }
    },
    components: {
      customScroll,
      articleList
    },
    mounted () {
      let that = this
      that.$store.path = '/'
      that.$store.commit('hideLogin')
      axios.get('https://www.vue-js.com/api/v1/topics').then(function (response) {
        that.article = response.data.data
      })
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
        let that = this
        axios.get('https://www.vue-js.com/api/v1/topics?tab='+val).then(function (response) {
          that.article = response.data.data
        })
      }
    }
  }
</script>

<style scoped>
  .home{
    padding-top: 48px;
  }
  .tab{
    height: 48px;
    position: fixed;
    left:0;
    top:0;
    z-index: 1;
    right:0;
  }


</style>
