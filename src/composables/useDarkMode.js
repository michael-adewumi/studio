import { ref, watch } from "vue";

const isDark = ref(true);

const apply = (dark) => {
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("dark", dark);
  }
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch (e) {}
};

try {
  const saved = localStorage.getItem("theme");
  isDark.value = saved ? saved === "dark" : true;
} catch (e) {
  isDark.value = true;
}

apply(isDark.value);
watch(isDark, apply);

export function useDarkMode() {
  const toggle = () => {
    isDark.value = !isDark.value;
  };
  return { isDark, toggle };
}
