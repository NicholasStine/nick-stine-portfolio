<template lang="pug">
    div.w-100
        div.d-flex.align-items-center
            b-card.mx-3.project(v-for="project of projects" :key="project.title" :class="project.focused && 'expanded'")
                b-card-body.text-center
                    img.image(src="candy-the-camo-dog.png")
                    h4.mt-2 {{ project.title }}
                    label {{ project.desc }}
</template>

<script>
import { defineComponent, onMounted, onUnmounted, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
    props: {
        direction: ''
    },
    setup(props) {
        let projects = reactive([
            new Project('first', 'The first project', false),
            new Project('second', "my project that's a second project", true),
            new Project('third', 'A third one :)', false)
        ]);

        function scrollInterval() {
            if (props.direction) { 
                for (var index in projects) {
                    if (projects[index].focused) {
                        projects[parseInt(index)].focused = false;
                        if (props.direction == 'backward') projects[index - 1 < 0 ? projects.length - 1 : index - 1].focused =  true;
                        if (props.direction == 'forward') projects[parseInt(index) + 1 > projects.length - 1 ? 0 : parseInt(index) + 1].focused = true;
                        break;

                    }
                }
            }
        }

        onMounted(() => {
            
            // setInterval(() => console.log('what de what'), 500)
            setInterval(scrollInterval, 3000);
        });

        onUnmounted(() => {
            clearInterval();
        })
        
        return {
            projects
        }
    },
})

class Project {
    constructor(title, desc, focused) {
        this.title = title;
        this.desc = desc;
        this.focused = focused
    }
}
</script>

<style scoped>
.image {
    width: 100%;
}

.expanded {
    width: 300%;
}
.project {
    height: fit-content;
}
</style>