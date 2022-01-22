<template lang="pug">
    div.w-100
        div.d-flex
            b-card.m-2(v-for="project of projects" key="project")
                b-card-body
                    label project
            //- div.b-card
            //-     div.b-card-body
            //-         h1 {{ project }}
            //-         label words
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
    setup() {
        let projects = [
            'first',
            'second'
        ]
        
        return {
            projects
        }
    },
})
</script>
