import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";

const revealObserver =
  typeof window !== "undefined"
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -20px 0px",
        },
      )
    : null;

const app = createApp(App);

app.directive("reveal", {
  mounted(el, binding) {
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("reveal-visible");
      return;
    }

    const options = binding.value ?? {};

    el.classList.add("reveal");

    if (options.origin) {
      el.dataset.revealOrigin = options.origin;
    }

    if (typeof options.delay === "number") {
      el.style.transitionDelay = `${options.delay}ms`;
    }

    if (revealObserver) {
      revealObserver.observe(el);
    } else {
      el.classList.add("reveal-visible");
    }
  },
  unmounted(el) {
    revealObserver?.unobserve(el);
  },
});

app.mount("#app");
