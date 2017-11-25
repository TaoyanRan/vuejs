<template class="customScroll">
  <div class="customScroll">
    <div>
      <mu-card v-for="(n,index) in article" key="n">
        <mu-card-header :title="n.author.loginname" :subTitle="n.tab">
          <mu-avatar :src="n.author.avatar_url" slot="avatar" onerror="this.src='http://upload.jianshu.io/users/upload_avatars/2024593/4139cc96fc04?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144'"/>
        </mu-card-header>

        <mu-list-item class="articleItem" @click="open('bottom',n.id)">
          <strong>{{index+1}}、</strong>{{n.title}}
        </mu-list-item>

        <p class="articleTag">
          <span>{{n.last_reply_at.substring(0,10)}}</span>
          <mu-icon value="visibility" />
          <span>{{n.visit_count}}</span>
          <mu-icon value="chat_bubble" />
          <span>{{n.reply_count}}</span>
        </p>
      </mu-card>

    </div>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>

    <!--帖子详情-->
    <mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
      <div class="flex">
        <div>
          <mu-appbar title="详情">
            <mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')"/>
          </mu-appbar>
        </div>
        <div class="container">
          <mu-content-block>
            <h1 class="articleInfoTitle">{{articleInfo.title}}</h1>
            <div v-html="articleInfo.content"></div>
          </mu-content-block>
        </div>
        <div class="footer articleInfoFooter">
          <div class="flex flexRow">
            <mu-text-field hintText="说点什么吧"/>
            <div @click="openComment('bottom')">
              <!--<mu-badge :content="articleInfo.replies.length" class="demo-icon-badge" circle secondary>-->
                <!--<mu-icon value="notifications"/>-->
              <!--</mu-badge>-->
              评论
            </div>

            <div @click="collection">收藏</div>
          </div>
        </div>
      </div>
    </mu-popup>

    <!--帖子评论列表-->
    <mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup2" @close="closeComment('bottom')">
      <div class="flex">
        <div>
          <mu-appbar title="评论">
            <mu-flat-button slot="right" label="关闭" color="white" @click="closeComment('bottom')"/>
          </mu-appbar>
        </div>
        <div class="container">
          <mu-content-block>
            <div v-for="n in articleInfo.replies">
              <div class="articleCommentUser">
                <mu-list-item :title="n.author.loginname" disabled>
                  <mu-avatar slot="left" :src="n.author.avatar_url"/>
                </mu-list-item>
              </div>
              <div class="articleCommentText" v-html="n.content"></div>
            </div>
          </mu-content-block>
          <div class="notComments" v-if="articleInfo.replies==''">暂时还没有人评论哦~</div>
        </div>
      </div>
    </mu-popup>



  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        loading: false,
        scroller: null,
        bottomPopup: false,
        bottomPopup2: false,
        articleInfo:'',
        articleTitle:'',
        articleContent:''
      }
    },
    props: ['article','value'],
    components: {

    },
    mounted () {
      this.scroller = this.$el
    },
    methods: {
      loadMore () {
        /*this.loading = true
        setTimeout(() => {
          this.article += 5
          this.loading = false
        }, 2000)*/
      },
      open (position,articleID) {
        this[position + 'Popup'] = true;
        let that = this;
        that.$store.commit('getArticleInfo',{
            id: articleID,
            callback: function (data) {
            that.articleInfo = data
            }
        })
      },
      close (position) {
        this[position + 'Popup'] = false
      },
      openComment (position) {
        this[position + 'Popup2'] = true
      },
      closeComment (position) {
        this[position + 'Popup2'] = false
      },
      collection: function () {
        alert('点击了收藏')
      }
    }
  }
</script>

<style scoped>
  .customScroll{
    height:100%;
    overflow-y: auto;
  }
  .container{
    height:100%;
    overflow-y: auto;
  }
  .mu-card-header{
    padding:16px 16px 0;
  }
  .mu-card-text{
    padding:5px 16px;
    text-align: justify;
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
  .flex{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
  }
  .flexRow{
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-top:1px solid #eee;
  }
  .mu-item{
    padding:0 16px;
    max-height: none;
  }
  .articleInfoTitle{
    font-size: 18px;
    line-height:1.5em;
    text-align: justify;
  }
  .articleInfoFooter{
    height:auto;
    box-shadow: 0 0 2px #333;
    background: #f9f9f9;
  }
  .articleCommentUser{
    padding:8px 0;
    margin-left: -16px;
  }
  .articleCommentText{
    padding:8px 0 16px;
    border-bottom:1px solid #eee;
  }
  .notComments{
    text-align: center;
    padding:35px 10px;
    color: #999;
    font-size: 18px;
  }
</style>
