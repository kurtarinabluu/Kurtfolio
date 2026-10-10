<script setup lang="ts">
import type { PortfolioData } from '../../data/portfolioData'
import PortfolioIcon from '../ui/PortfolioIcon.vue'

defineProps<{ experience: PortfolioData['experience'] }>()
</script>

<template>
  <section
    id="experience"
    aria-labelledby="experience-heading"
    class="bg-peony-200 dark:bg-peony-300 text-espresso-900 section-spacing border-t border-b border-espresso-900/20 transition-colors duration-300"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2
          id="experience-heading"
          class="font-serif fluid-section-title font-bold text-espresso-900"
        >
          {{ experience.title }}
        </h2>
        <div class="w-12 h-0.5 bg-espresso-900 mx-auto mt-3 mb-4" aria-hidden="true"></div>
        <p class="fluid-body text-espresso-800 font-medium">
          {{ experience.subtitle }}
        </p>
      </div>

      <div class="relative pl-6 sm:pl-10 border-l-2 border-espresso-900/45 space-y-10">
        <article
          v-for="item in experience.items"
          :key="item.id"
          class="relative bg-peony-50/75 dark:bg-peony-100/80 rounded-2xl p-6 sm:p-7 border border-espresso-900/10"
        >
          <span
            class="absolute -left-[2.35rem] sm:-left-[3.35rem] top-6 w-9 h-9 rounded-full bg-espresso-900 text-alabaster-100 inline-flex items-center justify-center border-2 border-peony-200 shadow-sm"
            aria-hidden="true"
          >
            <PortfolioIcon :name="item.icon" class-name="w-4 h-4" />
          </span>

          <div class="text-left mb-4">
            <h3 class="font-serif text-xl sm:text-2xl font-bold text-espresso-900">
              {{ item.role }}
            </h3>
            <p class="text-sm font-semibold text-espresso-800 mt-1">
              {{ item.context }}
            </p>
          </div>

          <ul class="space-y-2.5 text-sm sm:text-base text-espresso-900 list-disc pl-5 max-w-2xl mx-auto">
            <li
              v-for="bullet in item.bullets"
              :key="bullet"
              class="leading-relaxed"
            >
              {{ bullet }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
