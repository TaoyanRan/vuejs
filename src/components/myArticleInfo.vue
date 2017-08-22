<template id="">

    <div class="articleInfo">
      <h1 class="articleInfoTitle">{{articleInfo.title}}</h1>
      <div v-html="articleInfo.content"></div>
    </div>

</template>


<script>
    export default{
        name: "",
        components: {

        },
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
</style>
