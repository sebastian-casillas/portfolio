<template>
    <div style="display: inline-block;">
        <img :src="tag.img" style="height: 3.2mm; width: 3.2mm; margin: 0 .8mm;"/><span style="font-size: 3.2mm; line-height: 3.2mm; vertical-align: text-top; font-weight: 600; color: #555;">{{tag.content}}</span>
    </div>
</template>

<script>
    export default {
        name: 'MyTag',
        props: ['tag'],
    }
</script>