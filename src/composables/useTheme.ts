import { ref, watch } from 'vue'

export function useTheme() {
  let savedTheme
  try { savedTheme = localStorage.getItem('kurtfolio-theme') } catch {}
  const isDark = ref(savedTheme === 'dark')
  watch(isDark, (dark) => {
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
    try { localStorage.setItem('kurtfolio-theme', dark ? 'dark' : 'light') } catch {}
  }, { immediate: true })
  return { isDark, toggleTheme: () => { isDark.value = !isDark.value } }
}
