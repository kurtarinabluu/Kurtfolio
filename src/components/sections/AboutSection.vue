<script setup lang="ts">
import type { PortfolioData } from '../../data/portfolioData'
import PortfolioIcon from '../ui/PortfolioIcon.vue'

defineProps<{ about: PortfolioData['about'] }>()
</script>

<template>
  <section
    id="about"
    aria-labelledby="about-heading"
    class="section-spacing bg-peony-50 dark:bg-espresso-900 border-b border-peony-500/30 transition-colors duration-300"
  >
    <div class="page-container">
      <div class="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <h2
          id="about-heading"
          class="font-serif fluid-section-title font-bold text-espresso-900 dark:text-alabaster-100"
        >
          {{ about.title }}
        </h2>
        <div class="w-12 h-0.5 bg-peony-400 dark:bg-peony-300 mx-auto mt-3 mb-4" aria-hidden="true"></div>
        <p class="font-serif italic text-base sm:text-lg text-espresso-800 dark:text-peony-200">
          {{ about.tagline }}
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <article
          v-for="(card, index) in about.cards"
          :key="card.id"
          :class="[
            'rounded-2xl border border-peony-500/30 bg-white dark:bg-espresso-800/90 p-6 sm:p-7 flex flex-col justify-between transition-colors',
            index === 2 ? 'md:col-span-2 lg:col-span-1' : '',
          ]"
        >
          <div>
            <div class="flex items-center gap-2.5 mb-4">
              <span
                class="w-8 h-8 rounded-lg bg-peony-300/30 dark:bg-peony-300/20 text-espresso-900 dark:text-peony-200 inline-flex items-center justify-center border border-peony-500/60"
                aria-hidden="true"
              >
                <PortfolioIcon :name="card.icon" class-name="w-4 h-4" />
              </span>
              <h3 class="font-serif text-lg font-semibold text-espresso-900 dark:text-alabaster-100">
                {{ card.title }}
              </h3>
            </div>

            <p class="fluid-body text-espresso-800 dark:text-alabaster-200">
              {{ card.body }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
