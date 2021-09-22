<template>
  <div>
    <h1>App 组件</h1>
    <button class="btn btn1">按钮1</button>
    <button class="btn btn2">按钮2</button>
    <ul>
      <li @click="choose(index)" :class="{active: navIndex === index}" v-for="item,index in 20" :key="index">{{index+1}}</li>
    </ul>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data () {
    return {
      navIndex: 0
    }
  },
  methods:{
    choose(index){
      this.navIndex = index
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus">
 @import '~common/stylus/mixins.styl'

  /*1. 定义变量 */
  $color = green
  /*2. 定义混合 */
  btnStyle(w,h,bg)
    width w
    height h
    border none
    background-color bg
  
  /*3. 定义一个函数 */
  add(a,b)
    a+b

  h1
    color $color
  .btn1
    btnStyle(100px,100px,red)
    box-sizing content-box
    padding add(25px,25px)
  .btn2
    btnStyle(200px,200px,$color)
  .box 
    width 200px
    height 200px
    border 1px solid black
  ul
    li
     line-height 50px
     bottom-border-1px($color)
     &.active  /* 4. 父级引用 &代表li */
       color red
</style>
