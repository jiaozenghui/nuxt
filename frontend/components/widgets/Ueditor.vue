<template>
    <div>
       <div is="script" :id="id" scoped></div>
    </div>
</template>
<script >
export default {
    props: {
        id: {
            type:String,
            default:''
        },
        config: {
            type:Object,
            required: true
        },
        defaultMsg: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            editor: null    
        }
    },
    mounted() {
        const _this = this;
        _this.editor = UE.getEditor(_this.id, _this.config);
        _this.editor.addListener("ready", function() {
            _this.editor.setContent(_this.defaultMsg); 
        });
    },
    destroyed() {
        this.editor.destroy();
    },
    methods: {
        getContent() {
            return this.editor.getContent();
        }
    }
}
</script>
<style lang="scss" scoped>
</style>