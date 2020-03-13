<template>
    <section>
      <table class="pop-table1" cellspacing="0">
          <thead>
          	<tr>
          		<th :key="index" v-for="(tableitem,index) in tablelist.head" :width="tableitem.width">{{tableitem.name}}</th>
          	</tr>
          </thead>
          <tbody  ref="wdbody">
          	<tr v-show="index >= changeIndex && index < changeIndex + tablelist.body.length"   :class="[tableclass ? 'is-' + tableclass  : '']"  :key="index"  v-for="(tableitem,index) in bodyList" @click="change(index)">
          		<td :key="index" v-for="(tabletd,index) in tableitem">{{tabletd}}</td>
<!-- :class=" {red : index=='state'&&tableitem.state == '未办理',green : index=='state'&&tableitem.state == '已办结',orange :  index=='state'&&tableitem.state == '办理中'}" -->
          	</tr>
          </tbody>
      </table>

    </section>

</template>

<script>
    export default {
     name:"wioc-table1",
	 props:{
		 tablelist:{
			 type:Object,
		 },
		 tableclass:{
			 type: String,
		 },
		 scroll:{
			 type: Boolean,
			 default:false
		 }
	 },
     data(){
		return {
			changeIndex:0,
			duration:1000,
		}
     },
	 watch: {
		tablelist: {
			handler(newValue) {
// let _that = this;
// 	    			setTimeout(function(){
// 	    				$("#"+_that.windowList.stId).children("tbody").children("tr").hide().slice(0,_that.windowList.stView).show();
// 	    			},10);
// 		    		let isViewing = $("#"+this.windowList.stId).find("tbody");
// 		    		isViewing.addClass("cbs-fade");
// 		    		setTimeout(function(){
// 		    			isViewing.removeClass("cbs-fade");
// 		    		},300);
			},
			deep: true,
			immediate: true
		},
	 },
	 computed:{
		 bodyList(){
			 if(this.scroll){
				 return this.tablelist.body.concat(this.tablelist.body)
			 }else{
				return this.tablelist.body
			 }

		 }
	 },
	 mounted () {
		 if(this.scroll){
			this.refreshData()
		 }
	 },
     methods:{
		refreshData(){
			if(this.changeIndex>=this.tablelist.body.length){
				this.changeIndex = 0
			}else{
				this.changeIndex++
			}
			setTimeout(this.refreshData,this.duration)
		 },
         change(item){
             this.$emit('change',item)
         }
       }
     }
</script>

<style lang="less" scoped>
    .pop-table1{
        table-layout: fixed;
        width: 100%;
        thead{
            th{
                background: #096070;
                font-size: 1rem;
                font-weight: normal;
                color: #fff;
                line-height: 1.2rem;
                text-align: center;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        tbody{
            tr{
                td{
                    font-size: 1rem;
                    color: #333;
                    line-height: 1.2rem;
                    text-align: center;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    &.red{
                        color: #d65252;
                    }
                    &.green{
                        color: #33dd7f;
                    }
                    &.orange{
                        color: #df7926;
                    }
                }
				&.is-even{
					&:nth-child(even){
					    background: rgba(11,126,139,.2);
					}
				}
				&.is-odd{
					&:nth-child(odd){
					    background: rgba(11,126,139,.2);
					}
				}

            }
        }
    }
	.cbs-fade{
		animation: cbsFade .3s linear;
	}
	.hide{
		display: none;
		transition: 0.5s all ease-in-out;
	}
	.show{
		display: block;
		transition: 0.5s all ease-in-out;
	}
	@keyframes cbsFade{
	    0% {
	        opacity: 0;
	        transform: scale(.9);
	    }
	    100% {
	        opacity: 1;
	        transform: scale(1);
	    }
	}
</style>
