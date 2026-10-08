<script setup>
import { ref, onMounted } from "vue";

const isVisible = ref(false);

onMounted(() => {
  requestAnimationFrame(() => {
    isVisible.value = true;
  });
});

const email = "adewumimicheal00@gmail.com";
const linkedinUrl = "https://www.linkedin.com/in/michael-adewumi/";
</script>

<template>
  <div class="uc-page">
    <div class="uc-bg-grid" aria-hidden="true" />
    <div class="uc-bg-glow uc-bg-glow--top" aria-hidden="true" />
    <div class="uc-bg-glow uc-bg-glow--center" aria-hidden="true" />
    <div class="uc-bg-glow uc-bg-glow--bottom" aria-hidden="true" />

    <div class="uc-content" :class="{ 'uc-content--visible': isVisible }">
      <header class="uc-header">
        <h1 class="uc-name">MICHAEL ADEWUMI</h1>
        <span class="uc-status-pill" role="status">
          <span class="uc-status-pill__dot" aria-hidden="true" />
          Portfolio update in progress
        </span>
      </header>

      <main class="uc-main">
        <div class="uc-status-indicator" role="status">
          <span class="uc-pulse-dot" aria-hidden="true" />
          <span class="uc-status-text">Currently being revamped</span>
        </div>

        <h2 class="uc-headline">
          A sharper portfolio is
          <span class="uc-headline__gradient">on the way.</span>
        </h2>

        <p class="uc-description">
          I'm currently rebuilding my portfolio to better showcase the
          applications, interfaces, and engineering work I've been building.
        </p>

        <div class="uc-identity">
          <span class="uc-role">FRONTEND ENGINEER</span>
          <span class="uc-tech-line">Vue · React · TypeScript · Next.js</span>
        </div>

        <div class="uc-ctas">
          <a
            :href="linkedinUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="uc-btn uc-btn--primary"
          >
            <svg
              class="uc-btn__icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
            Connect on LinkedIn
          </a>

          <a :href="`mailto:${email}`" class="uc-btn uc-btn--secondary">
            <svg
              class="uc-btn__icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Get in touch
          </a>
        </div>
      </main>

      <footer class="uc-footer">
        <p class="uc-footer__text">
          Thanks for stopping by. The new portfolio will be back soon.
        </p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.uc-page {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh;
  overflow: hidden;
  background-color: #0a0f1a;
  color: #e2e8f0;
  font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
}

.uc-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(56, 189, 248, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(56, 189, 248, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(
    ellipse 70% 60% at 50% 50%,
    black 30%,
    transparent 80%
  );
  -webkit-mask-image: radial-gradient(
    ellipse 70% 60% at 50% 50%,
    black 30%,
    transparent 80%
  );
}

.uc-bg-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
}

.uc-bg-glow--top {
  top: -10%;
  left: 50%;
  width: 600px;
  height: 400px;
  transform: translateX(-50%);
  background: radial-gradient(
    circle,
    rgba(56, 189, 248, 0.08) 0%,
    transparent 70%
  );
}

.uc-bg-glow--center {
  top: 40%;
  left: 30%;
  width: 500px;
  height: 500px;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    rgba(6, 182, 212, 0.06) 0%,
    transparent 70%
  );
}

.uc-bg-glow--bottom {
  bottom: -20%;
  right: -10%;
  width: 450px;
  height: 450px;
  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.05) 0%,
    transparent 70%
  );
}

.uc-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 720px;
  width: 100%;
  padding: 2rem 1.25rem;
  min-height: 100vh;
  min-height: 100dvh;
  justify-content: center;
  gap: 0;

  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 800ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
}

.uc-content--visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .uc-content {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

.uc-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.uc-name {
  font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  color: #94a3b8;
  margin: 0;
}

.uc-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #67e8f9;
  background: rgba(6, 182, 212, 0.08);
  border: 1px solid rgba(6, 182, 212, 0.15);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.uc-status-pill__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #22d3ee;
  animation: uc-pulse 2.5s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .uc-status-pill__dot {
    animation: none;
  }
}

.uc-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.uc-status-indicator {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1.5rem;
}

.uc-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #06b6d4;
  box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.4);
  animation: uc-pulse 2.5s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .uc-pulse-dot {
    animation: none;
    box-shadow: 0 0 6px rgba(6, 182, 212, 0.5);
  }
}

.uc-status-text {
  font-size: 0.8125rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #67e8f9;
}

.uc-headline {
  font-family: "Poppins", "Inter", ui-sans-serif, system-ui, sans-serif;
  font-size: clamp(1.75rem, 5vw, 3rem);
  font-weight: 600;
  line-height: 1.2;
  color: #f1f5f9;
  margin: 0 0 1.25rem;
  letter-spacing: -0.01em;
}

.uc-headline__gradient {
  background: linear-gradient(135deg, #22d3ee 0%, #818cf8 50%, #a78bfa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.uc-description {
  font-size: clamp(0.9375rem, 2.5vw, 1.0625rem);
  line-height: 1.7;
  color: #94a3b8;
  max-width: 520px;
  margin: 0 0 2rem;
}

.uc-identity {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 2.5rem;
  padding: 1.25rem 2rem;
  border-radius: 1rem;
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(56, 189, 248, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.uc-role {
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  color: #e2e8f0;
}

.uc-tech-line {
  font-size: 0.875rem;
  font-weight: 400;
  color: #64748b;
  letter-spacing: 0.04em;
}

.uc-ctas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.875rem;
}

.uc-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 200ms ease;
  cursor: pointer;
  white-space: nowrap;
}

.uc-btn:focus-visible {
  outline: 2px solid #22d3ee;
  outline-offset: 2px;
}

.uc-btn__icon {
  flex-shrink: 0;
}

.uc-btn--primary {
  background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%);
  color: #fff;
  border: none;
  box-shadow: 0 1px 3px rgba(6, 182, 212, 0.2);
}

.uc-btn--primary:hover {
  background: linear-gradient(135deg, #0e7490 0%, #0891b2 100%);
  box-shadow: 0 4px 16px rgba(6, 182, 212, 0.25);
  transform: translateY(-1px);
}

.uc-btn--primary:active {
  transform: translateY(0);
}

.uc-btn--secondary {
  background: rgba(15, 23, 42, 0.6);
  color: #cbd5e1;
  border: 1px solid rgba(100, 116, 139, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.uc-btn--secondary:hover {
  background: rgba(30, 41, 59, 0.7);
  color: #f1f5f9;
  border-color: rgba(100, 116, 139, 0.5);
  transform: translateY(-1px);
}

.uc-btn--secondary:active {
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .uc-btn {
    transition: none;
  }
  .uc-btn:hover {
    transform: none;
  }
}

.uc-footer {
  margin-top: 4rem;
}

.uc-footer__text {
  font-size: 0.8125rem;
  color: #475569;
  margin: 0;
}

@keyframes uc-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(6, 182, 212, 0);
  }
}

@media (max-width: 640px) {
  .uc-content {
    padding: 1.5rem 1rem;
  }

  .uc-header {
    margin-bottom: 2.5rem;
  }

  .uc-identity {
    padding: 1rem 1.5rem;
  }

  .uc-ctas {
    flex-direction: column;
    width: 100%;
    max-width: 320px;
  }

  .uc-btn {
    width: 100%;
    padding: 0.875rem 1.5rem;
  }

  .uc-footer {
    margin-top: 3rem;
  }
}
</style>
