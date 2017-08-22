<template id="">

    <div class="myPage">
      <!--<loginPage></loginPage>-->
      <div class="item">
        <mu-list>
          <mu-list-item :title="user.loginname" :describeText="'ID：'+ user.id">
            <mu-avatar :src="user.avatar_url" slot="leftAvatar"/>
          </mu-list-item>
        </mu-list>
      </div>

      <div class="item">
        <mu-list>
          <div class="itemIn">
            <mu-list-item title="我的收藏" @click="myCollect('bottom','我的收藏')">
              <mu-avatar slot="left" icon="star" color="#fcc015" backgroundColor="#fff" :size="25" :iconSize="25"/>
              <mu-badge content="12" slot="after"/>
            </mu-list-item>
          </div>
          <div class="itemIn">
            <mu-list-item title="我参与的话题" @click="myTopics('bottom','我参与的话题')">
              <mu-avatar slot="left" icon="chat" color="#00b1fe" backgroundColor="#fff" :size="25" :iconSize="25"/>
              <mu-badge content="12" slot="after"/>
            </mu-list-item>
          </div>
          <div class="itemIn">
            <mu-list-item title="我最近的话题" @click="recentTopics('bottom','我最近的话题')">
              <mu-avatar slot="left" icon="bubble_chart" color="#f86161" backgroundColor="#fff" :size="25" :iconSize="25"/>
              <mu-badge content="12" slot="after"/>
            </mu-list-item>
          </div>
        </mu-list>
      </div>

      <div class="item">
        <mu-raised-button label="退出登录" class="logOut" @click="logOut"/>
      </div>




      <mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
        <mu-appbar :title="popTitle">
          <mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')"/>
        </mu-appbar>
        <mu-content-block>
          <div class="popModel">
            <p v-if="article == ''" style="text-align:center;padding:35px 10px;color: #999;font-size: 18px;">{{popTitle}}被猫叼走了😭</p>
            <myArticleList :article="article"></myArticleList>
          </div>


        </mu-content-block>
      </mu-popup>




    </div>

</template>


<script>
    import axios from 'axios'
    import myArticleList from '@/components/myArticleList.vue'
    export default{
        name: "",
        components: {
          myArticleList
        },
        data () {
            return {
              bottomPopup: false,
              popType: '',
              popTitle: '',
              article: ''
            }
        },
        computed: {
          user(){
            return this.$store.state.user
          }
        },
        mounted () {
          let that = this
          if(!that.$store.state.isLogin){
            that.$store.commit('showLogin')
          }
        },
        methods: {
          close (position) {
            this[position + 'Popup'] = false
          },
          // 我的收藏
          myCollect (position,title) {
            this[position + 'Popup'] = true
            this.popTitle = title
            this.popType = 'collect'
            this.article = this.$store.state.userInfo.collect_topics
          },
          // 我参与的话题
          myTopics (position,title) {
            this[position + 'Popup'] = true
            this.popTitle = title
            this.popType = 'topics'
            this.article = this.$store.state.userInfo.recent_replies
          },
          // 我最近的话题
          recentTopics (position,title) {
            this[position + 'Popup'] = true
            this.popTitle = title
            this.popType = 'recent'
            this.article = this.$store.state.userInfo.recent_topics
          },
          // 退出登陆
          logOut: function () {
            let that = this
            that.$store.commit('logout')
          }
        }
    }

</script>


<style scoped>
.myPage{
  height:100%;
  background: #eff2f7;
  position: relative;
}
.item{
  padding-top: 15px;
}
  .mu-list{
    background: #fff;
    padding:0;
  }
  .itemIn{
    border-bottom:1px solid #eee;
    padding:8px 0;
  }
  .mu-avatar{
    margin-right: -25px;
  }
  .logOut{
    width: 100%;
    height: 44px;
  }
</style>
<style>

  .mu-item{
    padding:8px 16px;
    min-height: 0;
  }
  .mu-card-header{
    padding:8px 16px;
  }
</style>
