<template id="">

    <div class="articleInfo">
      <h1 class="articleInfoTitle">{{articleInfo.title}}</h1>
      <div class="articleInfoContent" v-html="articleInfo.content"></div>


      <div class="footer articleInfoFooter">
        <button class="button">说点什么吧</button>
        <button class="button">评论</button>
        <button class="button">收藏</button>
      </div>

    </div>

</template>


<script>
    export default{
        name: "",
        components: {},
        data () {
            return {}
        },
        props: ['articleInfo'],
        methods: {}
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
