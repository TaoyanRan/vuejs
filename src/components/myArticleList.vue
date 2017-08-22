<template id="">

    <div class="myArticleList">
      <mu-card v-for="(n,index) in article" key="n">
        <mu-card-header :title="n.author.loginname" :subTitle="n.id">
          <mu-avatar :src="n.author.avatar_url" slot="avatar" onerror="this.src='http://upload.jianshu.io/users/upload_avatars/2024593/4139cc96fc04?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144'"/>
        </mu-card-header>

        <mu-list-item class="articleItem" @click="open('bottom',n.id)">
          <strong>{{index+1}}、</strong>{{n.title}}
        </mu-list-item>

        <p class="articleTag">
          <span>{{n.last_reply_at.substring(0,10)}}</span>
        </p>
      </mu-card>



      <mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
        <mu-appbar title="弹出">
          <mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')"/>
        </mu-appbar>
        <mu-content-block>
          <div class="popModel">
            <articleInfo :articleInfo="articleInfo"></articleInfo>
          </div>
        </mu-content-block>
      </mu-popup>
    </div>

</template>


<script>
    import axios from 'axios'
    import articleInfo from '@/components/MyArticleInfo.vue'
    export default{
        name: "",
        props:['article'],
        components: {
          articleInfo
        },
        data () {
            return {
              bottomPopup: false,
              articleInfo: ''
            }
        },
        methods: {
          open (position,articleID) {
            this[position + 'Popup'] = true
            let that = this
            axios.get('https://www.vue-js.com/api/v1/topic/'+articleID).then(function (response) {
              that.articleInfo = response.data.data
              console.log(that.articleInfo)
            })
          },
          close (position) {
            this[position + 'Popup'] = false
          }
        }
    }

</script>


<style scoped>
  .myArticleList{
  }
  .articleTag{
    color: #999;
    padding:0 16px 10px;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    margin:0;
  }
  .articleTag span{
    padding-right: 16px;
  }
  .articleTag .mu-icon{
    font-size: 20px;
  }
  .articleInfoTitle{
    font-size: 18px;
    line-height:1.5em;
    text-align: justify;
  }
  .articleItem{
    margin-top: -16px;
  }
</style>

<style>

</style>
