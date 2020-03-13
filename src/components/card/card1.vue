<template>
    <div class="wioc-card" :class="[border ? 'is-' + border + '-border' : 'is-none-border',shadow ? 'is-' + shadow  : '']">

        <span class="lt"></span>
        <span class="lb"></span>
        <span class="rt"></span>
        <span class="rb"></span>
        <div class="title clearfix" :class="[titpos ? 'is-' + titpos  : '']"  v-if="title">
			<slot name="title-before"></slot>
            <h3 :class="titlesize">{{title}}</h3>
            <slot name="sub-title"></slot>
            <div class="v-fr"><slot name="title"></slot></div>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    	<slot name="bottom"></slot>
    </div>
</template>
<script>
    export default {
        name: "wioc-card1",
        props: {
            border: {
                type: String, //none,solid,radius, angule
				default: 'solid'
            },
			title:{
				type: String,
				default: ''
			},
			titpos:{
				type: String,
				default: 'top' // left right bottom
			},
			shadow:{
				type: String, // insetshadow shadow hovershadow
				default: ''
			},
			titlesize:{
				type: String,//large middle small
				default:'large'
			}
        },
        data() {
            return {
                showHead: true,
                showContent: true
            };
        }
    }
</script>

<style lang="less">
    @border: 1px solid rgba(242,242,242,.5);
    @bc: rgba(242,242,242,.5);
    @borderc: #57bcff;
    @borders: solid;
    .wioc-card {
        position: relative;
		&.is-none-border{
			border: none
		}
		&.is-solid-border{
			border: @border
		}
		&.is-radius-border{
			border-radius:0.1rem;
		}
		&.is-insetshadow{
			box-shadow: 0 0 0.0256rem #e9e6e6 inset;
			animation: cnAnm .3s linear;
		}
		&.is-shadow{
			box-shadow: 0 0 0.2rem #e9e6e6;
			animation: cnAnm .3s linear;
		}
		&.is-onlyangle-border{
			.lt,
			.lb,
			.rt,
			.rb {
				display: block;
			    position: absolute;
			    border: @borders 4px @borderc;
			    width: 12px;
			    height: 12px;
			}
			.lt {
			    border-width: 4px 0 0 4px;
			    left: -4px;
			    top: -4px;
			}
			.lb {
			    border-width: 0 0 4px 4px;
			    left: -4px;
			    bottom: -4px;
			}
			.rt {
			    border-width: 4px 4px 0 0;
			    top: -4px;
			    right: -4px;
			}
			.rb {
			    border-width: 0 4px 4px 0;
			    right: -4px;
			    bottom: -4px;
			}
		}
		&.is-angle-border{
			border: @border;
			.lt,
			.lb,
			.rt,
			.rb {
				display: block;
			    position: absolute;
			    border: @borders 4px @borderc;
			    width: 12px;
			    height: 12px;
			}
			.lt {
			    border-width: 4px 0 0 4px;
			    left: -4px;
			    top: -4px;
			}
			.lb {
			    border-width: 0 0 4px 4px;
			    left: -4px;
			    bottom: -4px;
			}
			.rt {
			    border-width: 4px 4px 0 0;
			    top: -4px;
			    right: -4px;
			}
			.rb {
			    border-width: 0 4px 4px 0;
			    right: -4px;
			    bottom: -4px;
			}
		}

		@keyframes cnAnm{
		    0% {
				transform: scale(.1);
				opacity: 0;
			}
		    70% {
				transform: scale(1.1);
				opacity: 1;
			}
		    100% {
				transform: scale(1);
				opacity: 1;
			}
		}



        .title {
            line-height:  0.2rem;
			padding: 0.1rem  0.1rem 0  0.1rem;
            .before {
                width: 0.25rem;
                height: 0.273074rem;
                border-radius: 0.25rem;
                display: inline-block;
                background-color: #4fc3ff;
				margin: 0 0.25rem 0 0;
				vertical-align: sub;
            }
			.center{
				margin: 0 auto;
				text-align: center;
			}
            h3{
				display: inline-block;
				margin: 0px;
				font-size:0.153604rem;
				line-height: 0.153604rem;
				font-weight: bold;
				color: #595959;
			}
			.large{
				font-size:0.213339rem;
			}
			.middle{
				font-size:0.170671rem;
			}
			.small{
				font-size: 0.136537rem;
			}
            strong{
            	font-weight: normal;
            }
			&.left{

			}
			&.right{

			}
			&.bottom{

			}
        }
		.content{
			font-size:0.136537rem;
			padding: 0.15rem;
		}

    }
</style>
