<script setup>
import { onMounted, onUnmounted } from "vue";
import invoiceCreationImg from "@/assets/ipos-invoice-creation.png";
import transactionAnalyticsImg from "@/assets/ipos-transaction-analytics.png";
import invoiceManagementImg from "@/assets/ipos-invoice-management.png";

defineProps({
  isDark: Boolean,
});

const emit = defineEmits(["close", "toggle-dark"]);

const technologies = ["Vue", "TypeScript", "Pinia", "Axios", "REST APIs"];

const invoiceWorkflowSteps = [
  {
    step: "01",
    title: "Customer Assignment",
    desc: "Search existing accounts or register a new customer directly within the invoice context.",
  },
  {
    step: "02",
    title: "Schedule & Terms",
    desc: "Configure issue dates, payment due dates, and custom invoice references.",
  },
  {
    step: "03",
    title: "Inventory Selection",
    desc: "Pull product rows from the central catalog with live stock visibility.",
  },
  {
    step: "04",
    title: "Quantities & Units",
    desc: "Define unit measurements (pieces, bundles, kg) and item quantities.",
  },
  {
    step: "05",
    title: "Discounts & Taxes",
    desc: "Calculate percentage or fixed discounts and statutory tax rates dynamically.",
  },
  {
    step: "06",
    title: "Invoice Notes",
    desc: "Append contextual notes, delivery instructions, or banking terms.",
  },
  {
    step: "07",
    title: "Payment Link Generator",
    desc: "Toggle instant secure online payment link generation for remote clients.",
  },
  {
    step: "08",
    title: "Total Verification",
    desc: "Real-time computation of net subtotal, cumulative discount, tax, and gross total.",
  },
  {
    step: "09",
    title: "Preview & Delivery",
    desc: "Generate high-fidelity document previews before multi-channel issuance.",
  },
  {
    step: "10",
    title: "Lifecycle & Trail",
    desc: "Track payment receipts, audit history, and status changes across the organisation.",
  },
];

const techDetails = [
  {
    name: "Vue",
    role: "Component Architecture",
    desc: "Structured the multi-stage invoice builder into modular, reactive components. Reusable line-item rows, dynamic calculation fields, and preview modals maintained independent UI states without cluttering parent views.",
  },
  {
    name: "TypeScript",
    role: "Type Safety & Contracts",
    desc: "Enforced rigid interfaces across invoice payloads, customer objects, product models, and calculation results. Caught data mismatch regressions early between the frontend forms and backend schemas.",
  },
  {
    name: "Pinia",
    role: "Centralized State Management",
    desc: "Maintained reactive store modules for active draft invoices, catalog lookup caches, and user permission matrices. Allowed seamless cross-component communication without prop drilling.",
  },
  {
    name: "Axios",
    role: "HTTP & Interceptors",
    desc: "Handled REST API communication with robust error interceptors, authentication token renewal, and structured error messaging for failed transactions or duplicate invoice submissions.",
  },
  {
    name: "REST APIs",
    role: "Backend Integration",
    desc: "Integrated with enterprise services handling customer records, product availability, payment gateway links, and invoice PDF compilation.",
  },
];

function handleKeyDown(e) {
  if (e.key === "Escape") {
    emit("close");
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
  window.scrollTo({ top: 0, behavior: "instant" });
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<template>
  <div
    class="relative min-h-screen bg-[#f8f7f4] text-slate-900 dark:bg-[#0d1117] dark:text-slate-100"
  >
    <header
      class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/80"
    >
      <div class="container-shell flex h-16 items-center justify-between">
        <button
          type="button"
          @click="$emit('close')"
          class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 sm:text-sm"
        >
          <svg
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Portfolio
        </button>

        <span
          class="hidden font-mono text-xs text-slate-500 dark:text-slate-400 sm:inline-block"
        >
          iPOS · Engineering Case Study
        </span>

        <div class="flex items-center gap-3">
          <button
            type="button"
            @click="$emit('toggle-dark')"
            class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
            :aria-label="
              isDark ? 'Switch to light theme' : 'Switch to dark theme'
            "
          >
            <svg
              v-if="isDark"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <svg
              v-else
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>

          <a
            href="#contact"
            @click="$emit('close')"
            class="btn-primary !px-4 !py-2 !text-xs sm:!text-sm"
          >
            Let's work together
          </a>
        </div>
      </div>
    </header>

    <section class="section-padding !pb-12 !pt-12 sm:!pt-16">
      <div class="container-shell">
        <div class="max-w-4xl">
          <span class="eyebrow">CASE STUDY · PRODUCTION APPLICATION</span>
          <h1
            class="mt-5 font-display text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl"
          >
            iPOS — Business Management & Sales Platform
          </h1>
          <p
            class="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl"
          >
            A business management platform designed around sales, inventory,
            invoicing and payment workflows.
          </p>

          <div class="mt-6 flex flex-wrap items-center gap-3">
            <span
              class="rounded-full border border-brand-200/80 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700 dark:border-brand-800/80 dark:bg-brand-950/50 dark:text-brand-300"
            >
              Frontend Developer contribution
            </span>
            <div class="flex flex-wrap items-center gap-2">
              <span
                v-for="tech in technologies"
                :key="tech"
                class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding !pt-8">
      <div class="container-shell">
        <div class="surface-card p-6 sm:p-10 lg:p-12">
          <span class="eyebrow">System Overview</span>
          <h2
            class="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl"
          >
            Building around real business workflows.
          </h2>
          <div
            class="mt-6 space-y-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8"
          >
            <p>
              In production enterprise systems, software cannot exist as
              isolated CRUD pages. iPOS brought together core operational
              departments into a single unified platform: inventory tracking,
              customer accounts, invoice lifecycle, multi-channel payment links,
              and transactional reporting.
            </p>
            <p>
              My focus on the frontend was implementing interconnected business
              workflows. An action taken during invoice creation needed to
              validate real-time stock levels, check customer credit terms,
              apply complex tiered tax or discount rules, and trigger downstream
              status updates across the business.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding !pt-4">
      <div class="container-shell">
        <div class="max-w-3xl">
          <span class="eyebrow">Scope of Responsibility</span>
          <h2 class="section-title">What I worked on</h2>
          <p class="section-copy">
            I contributed to the frontend development of the platform across two
            primary domains:
          </p>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <div class="surface-card p-6 sm:p-8">
            <div class="icon-badge">
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3
              class="mt-5 text-xl font-semibold text-slate-950 dark:text-white"
            >
              1. Invoice & Business Workflow
            </h3>
            <p
              class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base"
            >
              Implemented the end-to-end invoice creation and lifecycle
              interface. This involved customer selection and creation, issue
              and due date scheduling, dynamic line-item product rows,
              unit-of-measure tracking, live discount and tax computations,
              payment link generation, invoice document previews, and payment
              history logs.
            </p>
          </div>

          <div class="surface-card p-6 sm:p-8">
            <div class="icon-badge">
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3
              class="mt-5 text-xl font-semibold text-slate-950 dark:text-white"
            >
              2. Roles & Permissions (RBAC)
            </h3>
            <p
              class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base"
            >
              Contributed to role-based permissions across the application,
              helping control access to features and data according to user
              responsibilities. Ensured that sensitive financial actions (such
              as overriding discounts, voiding invoices, or viewing gross
              transaction revenue) were strictly governed by role privileges at
              the UI and workflow level.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding !pt-8">
      <div class="container-shell">
        <div class="max-w-3xl">
          <span class="eyebrow">Core Feature</span>
          <h2 class="section-title">Invoice workflow</h2>
          <p class="section-copy">
            The core engine of the sales operations module was designed from the
            ground up as a fluid, connected workflow rather than a fragmented
            series of screens.
          </p>
        </div>

        <div
          class="mt-10 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:rounded-[2rem]"
        >
          <div
            class="border-b border-slate-200/80 bg-slate-50/80 px-6 py-4 dark:border-slate-800 dark:bg-slate-800/50"
          >
            <p
              class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
            >
              Interface Capture · Invoice Creation View
            </p>
          </div>
          <div class="p-4 sm:p-6 lg:p-8">
            <img
              :src="invoiceCreationImg"
              alt="iPOS invoice creation workflow showing customer, product, tax, discount and payment-link controls"
              loading="lazy"
              decoding="async"
              class="w-full rounded-xl border border-slate-200/60 shadow-sm dark:border-slate-800"
            />
            <p
              class="mt-4 text-xs text-slate-500 dark:text-slate-400 sm:text-sm"
            >
              Figure 1.0: Real-world invoice composition interface showing
              customer assignment, issue/due date selectors, product row
              line-items, tax/discount computations, and payment link generator.
              (Client data anonymized for privacy).
            </p>
          </div>
        </div>

        <div class="mt-12">
          <h3
            class="text-xl font-semibold text-slate-950 dark:text-white sm:text-2xl"
          >
            Ten Connected Stages in the Creation Journey
          </h3>
          <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="step in invoiceWorkflowSteps"
              :key="step.step"
              class="surface-card p-5"
            >
              <span
                class="font-mono text-xs font-semibold text-brand-600 dark:text-brand-400"
                >{{ step.step }}</span
              >
              <h4
                class="mt-2 text-base font-semibold text-slate-900 dark:text-white"
              >
                {{ step.title }}
              </h4>
              <p
                class="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400"
              >
                {{ step.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding !pt-8">
      <div class="container-shell">
        <div class="max-w-3xl">
          <span class="eyebrow">Financial Visibility</span>
          <h2 class="section-title">Payment and transaction visibility</h2>
          <p class="section-copy">
            Ensuring operational clarity meant giving business operators
            immediate insight into incoming cash flow and transaction trends
            over customizable periods.
          </p>
        </div>

        <div
          class="mt-10 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:rounded-[2rem]"
        >
          <div
            class="border-b border-slate-200/80 bg-slate-50/80 px-6 py-4 dark:border-slate-800 dark:bg-slate-800/50"
          >
            <p
              class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
            >
              Interface Capture · Transaction Analytics
            </p>
          </div>
          <div class="p-4 sm:p-6 lg:p-8">
            <img
              :src="transactionAnalyticsImg"
              alt="iPOS transaction analytics showing transaction totals and trend over time"
              loading="lazy"
              decoding="async"
              class="w-full rounded-xl border border-slate-200/60 shadow-sm dark:border-slate-800"
            />
            <p
              class="mt-4 text-xs text-slate-500 dark:text-slate-400 sm:text-sm"
            >
              Figure 2.0: Interactive transaction trend interface featuring
              date-range filters (Daily, Weekly, Monthly, 6 Months, 1 Year),
              total cumulative volumes, and interactive point inspection
              tooltips.
            </p>
          </div>
        </div>

        <div class="mt-8 grid gap-4 sm:grid-cols-3">
          <div class="surface-card p-5">
            <h4 class="text-sm font-semibold text-slate-900 dark:text-white">
              Transaction History
            </h4>
            <p
              class="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400"
            >
              Unified ledger recording all customer payments, invoice
              settlements, and terminal transactions.
            </p>
          </div>
          <div class="surface-card p-5">
            <h4 class="text-sm font-semibold text-slate-900 dark:text-white">
              Time-Range Controls
            </h4>
            <p
              class="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400"
            >
              Fast multi-interval toggles allowing instant switching between
              day, week, month, and annual revenue perspectives.
            </p>
          </div>
          <div class="surface-card p-5">
            <h4 class="text-sm font-semibold text-slate-900 dark:text-white">
              Visual Trend Inspection
            </h4>
            <p
              class="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400"
            >
              Dynamic spline visualization illustrating revenue movement,
              seasonal volume shifts, and milestone points.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding !pt-8">
      <div class="container-shell">
        <div class="max-w-3xl">
          <span class="eyebrow">Operational Governance</span>
          <h2 class="section-title">Invoice management & lifecycle</h2>
          <p class="section-copy">
            The platform supports the complete lifecycle of invoices far beyond
            initial composition.
          </p>
        </div>

        <div
          class="mt-10 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:rounded-[2rem]"
        >
          <div
            class="border-b border-slate-200/80 bg-slate-50/80 px-6 py-4 dark:border-slate-800 dark:bg-slate-800/50"
          >
            <p
              class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
            >
              Interface Capture · Invoice Management Table
            </p>
          </div>
          <div class="p-4 sm:p-6 lg:p-8">
            <img
              :src="invoiceManagementImg"
              alt="iPOS invoice management table showing invoice statuses and payment records"
              loading="lazy"
              decoding="async"
              class="w-full rounded-xl border border-slate-200/60 shadow-sm dark:border-slate-800"
            />
            <p
              class="mt-4 text-xs text-slate-500 dark:text-slate-400 sm:text-sm"
            >
              Figure 3.0: High-density invoice administration table displaying
              categorical status counters (Paid, Sent, Draft, Overdue, Void),
              search filtering, amounts, issue/due dates, and data export tools.
              (Client names and IDs blurred for confidentiality).
            </p>
          </div>
        </div>

        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div class="surface-card p-5">
            <span
              class="inline-block rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400"
              >Paid & Sent</span
            >
            <p
              class="mt-3 text-xs leading-6 text-slate-600 dark:text-slate-400"
            >
              Real-time reconciliation showing fulfilled invoices versus those
              awaiting client interaction.
            </p>
          </div>
          <div class="surface-card p-5">
            <span
              class="inline-block rounded-md bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-950/60 dark:text-amber-400"
              >Drafts</span
            >
            <p
              class="mt-3 text-xs leading-6 text-slate-600 dark:text-slate-400"
            >
              Uncommitted invoices preserved locally and remotely for
              multi-session editing and review.
            </p>
          </div>
          <div class="surface-card p-5">
            <span
              class="inline-block rounded-md bg-rose-50 px-2 py-0.5 text-xs font-semibold text-rose-700 dark:bg-rose-950/60 dark:text-rose-400"
              >Overdue & Void</span
            >
            <p
              class="mt-3 text-xs leading-6 text-slate-600 dark:text-slate-400"
            >
              Flagged delinquent accounts and formally voided records retained
              for transparent audit compliance.
            </p>
          </div>
          <div class="surface-card p-5">
            <span
              class="inline-block rounded-md bg-sky-50 px-2 py-0.5 text-xs font-semibold text-sky-700 dark:bg-sky-950/60 dark:text-sky-400"
              >Search & Export</span
            >
            <p
              class="mt-3 text-xs leading-6 text-slate-600 dark:text-slate-400"
            >
              Multi-parameter query bar across customer names and invoice
              amounts with spreadsheet export.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding !pt-8">
      <div class="container-shell">
        <div class="surface-card p-6 sm:p-10 lg:p-12">
          <span class="eyebrow">Enterprise Security</span>
          <h2
            class="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl"
          >
            Role-based access
          </h2>
          <div
            class="mt-6 space-y-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8"
          >
            <p>
              In business management platforms, data visibility is sensitive. A
              cashier, store manager, inventory clerk, and company director
              require fundamentally different operational views and authority.
            </p>
            <p>
              I contributed to role-based permissions across the application,
              implementing granular control over feature visibility, button
              actions, and sensitive data access according to user
              responsibilities. This ensured security was maintained
              consistently at the UI and workflow level without compromising the
              user experience for authorized personnel.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding !pt-8">
      <div class="container-shell">
        <div class="max-w-3xl">
          <span class="eyebrow">Architecture & Stack</span>
          <h2 class="section-title">Technical implementation</h2>
          <p class="section-copy">
            How modern frontend engineering tools directly powered the
            production workflow.
          </p>
        </div>

        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="tech in techDetails"
            :key="tech.name"
            class="surface-card p-6"
          >
            <span
              class="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400"
              >{{ tech.role }}</span
            >
            <h3
              class="mt-2 text-xl font-semibold text-slate-950 dark:text-white"
            >
              {{ tech.name }}
            </h3>
            <p
              class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400"
            >
              {{ tech.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding !pt-8">
      <div class="container-shell">
        <div class="surface-card p-6 sm:p-10 lg:p-12">
          <span class="eyebrow">System Complexity</span>
          <h2
            class="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl"
          >
            What made the workflow interesting
          </h2>
          <div
            class="mt-6 space-y-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8"
          >
            <p>
              Building enterprise software is rarely about writing isolated
              forms. This feature involved coordinating multiple interdependent
              concerns simultaneously: live customer credit states, inventory
              catalog quantities, dynamic price computations, compound discount
              and tax logic, multi-gateway payment triggers, document
              compilation, and role-based action gating.
            </p>
            <p class="font-medium text-slate-900 dark:text-white">
              "Building a useful frontend meant keeping these connected
              workflows consistent rather than treating each screen as an
              isolated feature."
            </p>
            <p>
              When a user modifies a single product quantity in a draft, that
              change ripples through subtotal recalculation, tax tiers,
              inventory reservation states, and the generated payment payload.
              Maintaining predictability across that entire chain was the
              primary engineering challenge.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding !pt-8">
      <div class="container-shell">
        <div class="surface-card p-6 sm:p-10 lg:p-12">
          <span class="eyebrow">Professional Growth</span>
          <h2
            class="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl"
          >
            What I took from the work
          </h2>
          <p
            class="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8"
          >
            "Working on this workflow strengthened my understanding of building
            frontend features around real business processes, where UI state,
            API data, permissions and user actions all need to work together
            reliably."
          </p>
        </div>
      </div>
    </section>

    <section class="section-padding !pt-8 !pb-20">
      <div class="container-shell">
        <div class="surface-card text-center p-8 sm:p-14">
          <span class="eyebrow">Next Steps</span>
          <h2
            class="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl"
          >
            Interested in building reliable application workflows?
          </h2>
          <p
            class="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base"
          >
            I'm available for frontend engineering roles, contract projects, and
            product development opportunities.
          </p>

          <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#contact" @click="$emit('close')" class="btn-primary">
              Let's work together
            </a>
            <a
              href="https://www.linkedin.com/in/michael-adewumi/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div class="mt-10">
            <button
              type="button"
              @click="$emit('close')"
              class="text-xs font-semibold text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 sm:text-sm"
            >
              ← Return to Selected Work
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
