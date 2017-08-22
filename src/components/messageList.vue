<template id="">

    <div class="">
      <mu-list>
        <mu-sub-header>今天</mu-sub-header>

        <div style="position: relative;">


          <mu-list-item title="这个周末一起吃饭么?" @click="open('bottom')">
            <mu-avatar src="https://www.vue-js.com/public/images/vue.png" slot="leftAvatar"/>
            <span slot="describe">
              <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span>
              <span>周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈</span>
            </span>
          </mu-list-item>

          <div style="position: absolute;right: 10px;top:0;">
            <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
              <mu-menu-item title="回复" @click="replyMessage('回复1')"/>
              <mu-menu-item title="标记" />
              <mu-menu-item title="删除" @click="deleteMessage"/>
            </mu-icon-menu>
          </div>

        </div>

        <mu-divider inset/>


      </mu-list>



      <mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
        <mu-appbar title="消息详情">
          <mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')"/>
        </mu-appbar>
        <mu-content-block>
          <div class="popModel">

              <messageInfo></messageInfo>


          </div>

        </mu-content-block>
      </mu-popup>
    </div>

</template>


<script>
    import messageInfo from '@/components/messageInfo.vue'
    export default {
        name: "",
        components: {
          messageInfo
        },
        data() {
            return {
              bottomPopup: false
            }
        },
        methods: {
          open (position) {
            this[position + 'Popup'] = true
          },
          close (position) {
            this[position + 'Popup'] = false
          },
          replyMessage: function (val) {
            alert(val)
          },
          deleteMessage: function () {
            alert('删除')
          }
        }
    }

</script>


<style scoped>

</style>
