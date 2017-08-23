<template id="">

    <div class="">
        <div v-for="n in articleInfo.replies">
            <div class="articleCommentUser">
                <mu-list-item :title="n.author.loginname" disabled>
                    <mu-avatar slot="left" :src="n.author.avatar_url"/>
                </mu-list-item>
            </div>
            <div class="articleCommentText" v-html="n.content"></div>
        </div>
        <div class="notComments" v-if="articleInfo.replies==''">暂时还没有人评论哦~</div>
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
    .articleCommentUser{
        margin-top: 16px;
        padding-bottom: 8px;
    }
    .articleCommentText{
        padding:8px 16px;
        border-bottom:1px solid #eee;
    }
    .notComments{
        text-align: center;
        padding:35px 10px;
        color: #999;
        font-size: 18px;
    }
</style>
