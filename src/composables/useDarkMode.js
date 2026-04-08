import {ref, watch, onMounted} from 'vue';

const isDark = ref(true)

// export function useDarkMode() {
    const apply = (dark) => {
        document.documentElement.classList.toggle('dark', dark)
        localStorage.setItem('theme', dark ? 'dark' : 'light')
    }

    const saved = localStorage.getItem('theme') 
    isDark.value = saved ? saved === 'dark' : true 
    apply(isDark.value)

    watch(isDark,apply)

    export function useDarkMode() {
        const toggle = () => {
            isDark.value = !isDark.value
        }
        return { isDark, toggle}
    }
