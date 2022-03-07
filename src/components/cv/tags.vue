<template>
    <div class="tag_element">
        <span class="tag_icon" :style="'background-image: url(' + tag.img + ')'"></span>
        <span class="tag_text">{{tag.content}}</span>
    </div>
</template>

<script>
    export default {
        name: 'MyTag',
        props: ['tag'],
    }
</script>

<style lang="scss">

    .tag_element{
        height: 2.9mm !important;
        margin-right: .8mm;
        display: inline-block;

        .tag_icon{
            display: inline-block;
            width: 3mm;
            height: 3mm;
            background-size: contain;   
            margin: 0 1mm 0 0; 
            fill: #f44;
            vertical-align: text-top !important;
            filter: invert(27%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%); 
        }

        .tag_text{
            font-size: 2.8mm !important; 
            line-height: 2.9mm !important; 
            
            font-weight: 600; 
            color: #555;
            vertical-align: text-top !important; 
        }
    }
    
</style>