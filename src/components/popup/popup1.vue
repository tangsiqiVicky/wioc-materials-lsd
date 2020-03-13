<template>
    <div class="Popup">
        <div class="close">&times;</div>
        <div class="popbc">
            <div class="column" v-if="showHead">
                {{title}}
                <slot name="subtitle"></slot>
            </div>

            <div v-if="showContent">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'wioc-popup1',
        props: {
            title: {
                type: String,
            }
        },
        data() {
            return {
                showHead: true,
                showContent: true
            };
        },
        mounted() {
            //关闭
            $(".Popup .close").click(function(){
                $(this).parent(".Popup").fadeOut(500);
                $(".pop-mask").remove();
            });
            //拖动
            var dragging = false;
            var iX, iY;
            $(".popbc .column").mousedown(function(e){
                dragging = true;
                iX = e.clientX - $(this).parent().offset().left;
                iY = e.clientY - $(this).parent().offset().top;
                $(this).parent().addClass("move-now");
                return false;
            });
            $(document).mousemove(function(e) {
                if(dragging){
                    var oX = e.clientX - iX;
                    var oY = e.clientY - iY;
                    $(".move-now").css({left:oX,top:oY});
                    return false;
                }
            });
            $(document).mouseup(function(e) {
                dragging = false;
                $(".move-now").removeClass("move-now");
            });
        }
    }
</script>
<style lang="less" scoped>
    .Popup {
        display: none;
        width: 25rem;
        height: 22rem;
        background-color: rgba(0, 0, 0, 0.8);
        right: 0px;
        left: 0px;
        top: 0px;
        bottom: 0px;
        margin: auto;
        position: fixed;
        z-index: 5999;
        min-width: 10rem;
        min-height: 10rem;
        padding: 1rem;
        -webkit-box-shadow: 0 0 20px #333 inset;
        box-shadow: 0 0 20px #333 inset;
        overflow: hidden;
    .close{

        z-index: 50;
        width: 5rem;
        height: 5rem;
        font-size: 3rem;
        color: #fff;
        text-align: center;
        cursor: pointer;
    }
    &.no-close{
    &>.close{
         display: none;
     }
    }
    .popbc{
        margin: 0rem auto;
        width: 25rem;
        height: 15rem;
        background: url(./img/pop-bc.png) no-repeat;
        background-size: 100%;
        overflow: hidden;
    .column {
        z-index: 40;
        height: 4rem;
        font-size: 2rem;
        color: #fff;
        text-align: center;
        margin: 5.5rem 0rem;
    }
    &.no-close{
    &>.close{
         display: none;
     }
    }
    }
    }

</style>
