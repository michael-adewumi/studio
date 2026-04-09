<script setup>
defineProps({
  modelValue: [String, Number],
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
  required: Boolean,
  disabled: Boolean,
  error: String,
  variant: {
    type: String,
    default: 'light' // 'light' or 'dark'
  },
  id: {
    type: String,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="w-full">
    <label 
      v-if="label" 
      :for="id" 
      class="mb-1.5 block text-sm font-medium transition-colors duration-200" 
      :class="[
        variant === 'dark' ? 'text-slate-400' : 'text-slate-700 dark:text-slate-300'
      ]"
    >
      {{ label }}
    </label>
    <div class="relative group">
      <input
        v-if="type !== 'textarea'"
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        class="w-full outline-none transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
        :class="[
          variant === 'dark'
            ? 'rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500'
            : 'rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-950 placeholder-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100'
        ]"
      />
      <textarea
        v-else
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        rows="4"
        class="w-full resize-none outline-none transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
        :class="[
          variant === 'dark'
            ? 'rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500'
            : 'rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-950 placeholder-slate-400 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100'
        ]"
      ></textarea>
      
      <!-- Subtle highlight effect on hover for premium feel -->
      <div 
        v-if="!disabled"
        class="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-brand-500/0 transition-all duration-300 group-hover:ring-brand-500/10"
      ></div>
    </div>
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <p v-if="error" class="mt-1.5 text-xs font-medium" :class="variant === 'dark' ? 'text-rose-400' : 'text-rose-500'">
        {{ error }}
      </p>
    </Transition>
  </div>
</template>
