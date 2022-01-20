<template>
    <div id="content-wrapper" class=" flex flex-col">
        <session-controls />
        <main-content />
        <main-controls />
        <div class="flex flex-row" style="background-color: #F7F8F9;">
            <div class="flex flex-col h-full" style="width:80%">
                <log-controls />
                <logs />
            </div>
            <div class="flex flex-col h-full" style="width:20%">
                <exam-meta />
            </div>
        </div>
    </div>
</template>
<script>
    import SessionControls from './views/Home/components/SessionControls/SessionControls.vue';
    import MainContent from './views/Home/components/MainContent/MainContent.vue';
    import MainControls from './views/Home/components/MainControls/MainControls.vue';
    import LogControls from './views/Home/components/LogControls/LogControls.vue';
    import Logs from './views/Home/components/Logs/Logs.vue';
    import ExamMeta from './views/Home/components/ExamMeta/ExamMeta.vue';
    export default {
        components: {
            'session-controls': SessionControls,
            'main-content': MainContent,
            'main-controls': MainControls,
            'log-controls': LogControls,
            'logs': Logs,
            'exam-meta': ExamMeta,
        },
    }
</script>
<style scoped>
</style>
