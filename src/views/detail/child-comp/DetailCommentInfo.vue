<template>
  <div class="comment-info">
    <div class="comment-top">
      <div class="top-title">用户评价</div>
      <div class="top-more">更多 ></div>
    </div>
    <div class="info-user">
      <img :src="userLogo" alt="">
      <span>{{uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span>{{commentInfo.created | showData}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img :src="item" alt="" v-for="(item,index) in commentInfo.images">
    </div>
  </div>
</template>

<script>
import {dateFormat} from'../../../commont/data'
export default {
  name: 'DetailCommentInfo',
  data() {
    return {
      userLogo:''
      ,uname:''
    }
  },
  props:{
    commentInfo:{
      type:Object,
      dafault(){
        return{}
      }
    }
  },
  
  filters:{
    showData(value){
      return dateFormat(new Date(value*1000),'yyyy-MM-dd')
    }
  },
  watch: {
    commentInfo(){
      this.userLogo=this.commentInfo.user.avatar
      this.uname=this.commentInfo.user.uname
    }
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
.comment-info{
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.comment-top{
  height: 50px;
  line-height: 50px;
  border-bottom: solid 1px rgba(0,0,0,.1);
}
.top-title{
  float: left;
  font-size: 15px;
}
.top-more{
  float: right;
  margin-right: 10px;
  font-size: 13px;

}
.info-user{
  padding: 10px 0 5px;
}
.info-user img{
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.info-user span{
  position: relative;
}
.info-desc .end::after{
  right: 0;
}
.info-desc .desc{
  padding: 15px 0;
}
.info-detail .info-other{
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.info-other .date{
  margin-right: 8px;
}
.info-imgs{
  margin: 10px;
}
.info-imgs img{
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>
