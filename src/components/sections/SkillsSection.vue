<script setup lang="ts">
import type { PortfolioData } from '../../data/portfolioData'
import { ref, computed } from 'vue'
import PortfolioIcon from '../ui/PortfolioIcon.vue'

const props = defineProps<{ skills: PortfolioData['skills'] }>()

const selectedCategoryId = ref('all')
const activePillLabel = ref('All Skills')

function selectPill(pill: PortfolioData['skills']['toolkitPills'][number]) {
  selectedCategoryId.value = pill.categoryId
  activePillLabel.value = pill.label
}

const primaryCategory = computed(() =>
  props.skills.categories.find((cat) => cat.isPrimary)
)

const secondaryCategories = computed(() =>
  props.skills.categories.filter((cat) => !cat.isPrimary)
)

function isCategoryHighlighted(categoryId: string) {
  return selectedCategoryId.value === 'all' || selectedCategoryId.value === categoryId
}
</script>

<template>
  <section
    id="skills"
    aria-labelledby="skills-heading"
    class="section-spacing bg-peony-50 dark:bg-espresso-900 transition-colors duration-300"
  >
    <div class="page-container">
      <div class="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <h2
          id="skills-heading"
          class="font-serif fluid-section-title font-bold text-espresso-900 dark:text-alabaster-100"
        >
          {{ skills.title }}
        </h2>
        <div class="w-12 h-0.5 bg-peony-400 dark:bg-peony-300 mx-auto mt-3 mb-4" aria-hidden="true"></div>
        <p class="fluid-body text-espresso-800 dark:text-alabaster-200">
          {{ skills.subtitle }}
        </p>
      </div>
      <div
        role="group"
        aria-label="Filter skills by tool or focus area"
        class="flex flex-wrap items-center justify-center gap-2.5 mb-10"
      >
        <button
          v-for="pill in skills.toolkitPills"
          :key="pill.label"
          type="button"
          :aria-pressed="activePillLabel === pill.label ? 'true' : 'false'"
          :class="[
            'min-h-[44px] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all inline-flex items-center gap-2',
            activePillLabel === pill.label
              ? 'bg-peony-300 text-espresso-900 border-espresso-900/40 shadow-sm'
              : 'bg-white dark:bg-espresso-800 text-espresso-900 dark:text-alabaster-200 border-peony-500 hover:bg-peony-100 dark:hover:bg-espresso-700',
          ]"
          @click="selectPill(pill)"
        >
          <span>{{ pill.label }}</span>
        </button>
      </div>
      <article
        v-if="primaryCategory"
        :class="[
          'rounded-2xl border-2 p-6 sm:p-8 mb-6 transition-all duration-200',
          isCategoryHighlighted(primaryCategory.id)
            ? 'border-peony-300 bg-white dark:bg-espresso-800 shadow-md'
            : 'border-peony-500/40 bg-white/60 dark:bg-espresso-800/50 opacity-60',
        ]"
      >
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div class="flex items-center gap-3">
            <span
              class="w-11 h-11 rounded-xl bg-peony-300 text-espresso-900 inline-flex items-center justify-center border border-espresso-900/20 shrink-0"
              aria-hidden="true"
            >
              <PortfolioIcon :name="primaryCategory.icon" class-name="w-5 h-5" />
            </span>
            <div>
              <div class="flex flex-wrap items-center gap-2.5">
                <h3 class="font-serif text-xl sm:text-2xl font-bold text-espresso-900 dark:text-alabaster-100">
                  {{ primaryCategory.title }}
                </h3>
                <span
                  v-if="primaryCategory.badge"
                  class="px-3 py-1 rounded-md bg-peony-300 text-espresso-900 text-xs font-bold border border-espresso-900/25"
                >
                  {{ primaryCategory.badge }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <p class="fluid-body text-espresso-800 dark:text-alabaster-200 mb-5 max-w-3xl">
          {{ primaryCategory.description }}
        </p>

        <ul aria-label="Graphic design tools and focus areas" class="flex flex-wrap gap-2">
          <li
            v-for="tool in primaryCategory.tools"
            :key="tool"
            class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-peony-100 dark:bg-espresso-900 text-espresso-900 dark:text-peony-200 border border-peony-500/60"
          >
            {{ tool }}
          </li>
        </ul>
      </article>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <article
          v-for="(category, idx) in secondaryCategories"
          :key="category.id"
          :class="[
            'rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200',
            idx === 2 ? 'md:col-span-2 lg:col-span-1' : '',
            isCategoryHighlighted(category.id)
              ? 'border-peony-500 bg-white dark:bg-espresso-800/95'
              : 'border-peony-500/35 bg-white/60 dark:bg-espresso-800/45 opacity-60',
          ]"
        >
          <div>
            <div class="flex items-center gap-3 mb-3.5">
              <span
                class="w-9 h-9 rounded-lg bg-peony-300/35 dark:bg-peony-300/20 text-espresso-900 dark:text-peony-200 inline-flex items-center justify-center border border-peony-500/60 shrink-0"
                aria-hidden="true"
              >
                <PortfolioIcon :name="category.icon" class-name="w-4 h-4" />
              </span>
              <h3 class="font-serif text-lg font-bold text-espresso-900 dark:text-alabaster-100">
                {{ category.title }}
              </h3>
            </div>

            <p class="fluid-body text-espresso-800 dark:text-alabaster-200 mb-5">
              {{ category.description }}
            </p>
          </div>

          <ul :aria-label="`${category.title} tools`" class="flex flex-wrap gap-1.5 pt-2 border-t border-peony-500/30">
            <li
              v-for="tool in category.tools"
              :key="tool"
              class="px-2.5 py-1 rounded-md text-xs font-medium bg-peony-100 dark:bg-espresso-900 text-espresso-900 dark:text-alabaster-200 border border-peony-500/50"
            >
              {{ tool }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
