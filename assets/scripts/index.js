let {createApp} = Vue
createApp({
    data() {
        return {
            isContainerVisible1: false
        }
    },
    created() {

    },
    mounted(){
        const observer1 = new IntersectionObserver(this.handleIntersection1, {
            root: null,
            rootMargin: '500px 0px 300px 0px',
            threshold: 1.0
        })
        observer1.observe(this.$refs.observedCont1)
    },
    methods: {
        handleIntersection1(entries) {
            entries.forEach(entry =>  {
                if (entry.isIntersecting) {
                    this.isContainerVisible1 = true
                } else {
                    this.isContainerVisible1 = false
                }
            })
        }
    },
    computed: {
        
    }
}).mount('#app')