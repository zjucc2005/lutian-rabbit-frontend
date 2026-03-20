import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
    let collapse = ref(false)

    function toggle() {
        collapse.value = !collapse.value
    }

    return { collapse, toggle }
})
