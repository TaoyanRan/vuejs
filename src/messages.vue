<template id="">

    <div class="">
      <div class="tab">
        <mu-tabs :value="activeTab" @change="handleTabChange">
          <mu-tab value="notReadMessage" title="未读消息"/>
          <mu-tab value="readMessage" title="已读消息"/>
        </mu-tabs>
      </div>

      <div class="messageList">

        <!--<p style="text-align:center;padding:35px 10px;color: #999;font-size: 18px;">没有新的消息~~</p>-->
        <!--<p style="text-align:center;padding:35px 10px;color: #999;font-size: 18px;">暂时没有消息~~</p>-->
        <messageList></messageList>

      </div>

    </div>

</template>


<script>
    import messageList from '@/components/messageList.vue'
    export default{
        name: "",
        components: {
          messageList
        },
        data () {
            return {
              activeTab: 'notReadMessage'
            }
        },
        mounted (){
          let that = this
          if(!that.$store.state.isLogin){
            that.$store.commit('showLogin')
          }
        },
        methods: {
          handleTabChange: function (val) {
            this.activeTab = val
          }
        }
    }

</script>


<style scoped>

</style>
