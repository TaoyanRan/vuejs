<template id="">

    <div class="articleInfo">
      <h1 class="articleInfoTitle">{{articleInfo.title}}</h1>
      <div class="articleInfoContent" v-html="articleInfo.content"></div>


      <div class="footer articleInfoFooter">
        <button class="button">说点什么吧</button>
        <button class="button" @click="open('bottom')">评论</button>
        <button class="button">收藏</button>
      </div>

        <mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">

            <mu-appbar title="详情">
                <mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')"/>
            </mu-appbar>

            <mu-content-block>
                <div class="popModel">
                    <commentList :articleInfo="articleInfo"></commentList>
                </div>
            </mu-content-block>

        </mu-popup>

    </div>

</template>


<script>
    import commentList from '@/components/commensList.vue'
    export default{
        name: "",
        components: {
            commentList
        },
        data () {
            return {
                bottomPopup: false
            }
        },
        props: ['articleInfo'],
        methods: {
            open (position,articleID) {
                this[position + 'Popup'] = true;
                let that = this
            },
            close (position) {
                this[position + 'Popup'] = false
            }
        }
    }

</script>


<style scoped>
  .articleInfo{
    padding: 15px;
  }
  .articleInfoTitle{
    font-size: 20px;
    color: #333333;
  }
  .articleInfoContent{
    padding-bottom: 44px;
  }
  .articleInfoFooter{
    height:44px;
    border-top:1px solid #e5e5e5;
    text-align: center;
    padding-top:6px;
    box-sizing: border-box;
    background: #f5f5f5;
  }
  .articleInfoFooter .button{
    width: 20%;
    height: 32px;
    margin:0;
    padding:0;
    border: 0;
    background: none;
    outline: none;
    color: #333333;
  }
  .articleInfoFooter .button:first-child{
    width: 50%;
    background: #ecece4;
  }

</style>
