<template lang="pug">
    div
        b-container.m-3
            b-row(align-h="around")
                b-col(cols=5)
                    h1.text-center.mb-5 You're here to bring your ideas to life
                    h3.text-center Let's talk
                b-col(cols=5 align-self="center")
                    p.text-center picture of me in the air with a laptop
                    h1.text-center.mt-5 I'm here to make it easy
            
        b-container.m-3.mt-5
            b-row
                h2 What I bring to the table
            b-row.mx-3.text-center(align-h="around")
                ProjectCarousel
                
        b-container.m-3.mt-5
            b-row(align-h="end")
                h1 Putting your success first
                //- span Testimonials
            b-row(align-h="end")
                b-row.w-50
                    span Testimonials
        

</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
