<template>
    <div class ="footer">
      <div class="btn">
        <div class ="btn-1">登陆</div>
      </div>
      <router-link to="/register">
      <div class="btn">
        <div  class ="btn-2">注册</div>
      </div>
      </router-link>
      <div class ="hr">
      <hr/>
      </div>
      <div class ="item">
        Qunar京ICP备05021087意见反馈
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeFooter"
    }
</script>

<style lang = "stylus" scoped>
  @import '~styles/varibles.styl'
.footer
  height 100%
  background #eeeeee
  color #666666
  .btn
      display inline-block
      padding .3em .5em
      background-image linear-gradient(#ddd, #bbb)
      border 1px solid rgba(0,0,0,.2)
      border-radius .3em
      box-shadow 0 1px white inset
      text-align center
      text-shadow 0 1px 1px black
      color white
      font-weight bold
      margin-top .2 rem
      margin-left 1.3rem
      .btn-1
        margin .1rem .4rem .1rem .4rem
      .btn-2
        margin .1rem .4rem .1rem .4rem
  .btn:active
      box-shadowm .05em .1em .2em rgba(0,0,0,.6) inset
      border-color rgba(0,0,0,.3)
      background #bbb
  .hr
    display relative
    margin-top .4rem
    margin-bottom .4rem
  .item
    text-align center
    margin-bottom  .4rem

</style>
