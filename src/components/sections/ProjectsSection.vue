<script setup lang="ts">
import type { PortfolioData } from '../../data/portfolioData'
import { ref, computed } from 'vue'
import PortfolioIcon from '../ui/PortfolioIcon.vue'

const props = defineProps<{ projects: PortfolioData['projects'] }>()

const selectedCategory = ref('All')
const searchQuery = ref('')

const categories = computed(() => ['All', ...new Set(props.projects.items.map((project) => project.category))])

const filteredProjects = computed(() => {
  return props.projects.items.filter((project) => {
    const matchesCategory =
      selectedCategory.value === 'All' || project.category === selectedCategory.value

    const query = searchQuery.value.trim().toLowerCase()
    if (!query) return matchesCategory

    const haystack = [
      project.title,
      project.description,
      project.focus,
      ...project.tags,
    ]
      .join(' ')
      .toLowerCase()

    return matchesCategory && haystack.includes(query)
  })
})

function resetFilters() {
  selectedCategory.value = 'All'
  searchQuery.value = ''
}
</script>

<template>
  <section
    id="projects"
    aria-labelledby="projects-heading"
    class="transition-colors duration-300"
  >
    <div class="bg-mauve-200 dark:bg-mauve-800 py-10 sm:py-12 border-t border-b border-peony-500/30">
      <div class="page-container text-center">
        <h2
          id="projects-heading"
          class="font-serif fluid-section-title font-bold text-espresso-900 dark:text-alabaster-100"
        >
          {{ projects.title }}
        </h2>
        <div class="w-12 h-0.5 bg-espresso-900 dark:bg-peony-300 mx-auto mt-3 mb-4" aria-hidden="true"></div>
        <p class="fluid-body text-espresso-900 dark:text-alabaster-200 max-w-2xl mx-auto">
          {{ projects.subtitle }}
        </p>
      </div>
    </div>
    <div class="bg-mauve-100 dark:bg-mauve-500 py-12 sm:py-16">
      <div class="page-container">
        <div
          class="mb-8 p-4 rounded-2xl bg-white/95 dark:bg-espresso-900/95 border border-peony-500/25 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
        >
          <div role="group" aria-label="Filter projects by role focus" class="flex flex-wrap items-center gap-2">
            <button
              v-for="cat in categories"
              :key="cat"
              type="button"
              :aria-pressed="selectedCategory === cat ? 'true' : 'false'"
              :class="[
                'min-h-[44px] px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold border transition-colors',
                selectedCategory === cat
                  ? 'bg-peony-300 text-espresso-900 border-espresso-900/40'
                  : 'bg-peony-50 dark:bg-espresso-800 text-espresso-900 dark:text-alabaster-200 border-peony-500 hover:bg-peony-200/60 dark:hover:bg-espresso-700',
              ]"
              @click="selectedCategory = cat"
            >
              {{ cat }}
            </button>
          </div>

          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div class="relative flex-1 sm:w-64">
              <label for="project-search" class="sr-only">Search projects by keyword</label>
              <input
                id="project-search"
                v-model="searchQuery"
                type="search"
                placeholder="Search projects…"
                class="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-peony-500 bg-peony-50 dark:bg-espresso-800 text-espresso-900 dark:text-alabaster-100 placeholder:text-espresso-700 dark:placeholder:text-alabaster-300 text-sm"
              />
            </div>

          </div>
        </div>
        <div
          v-if="filteredProjects.length === 0"
          role="status"
          class="rounded-2xl border border-peony-500/30 bg-white dark:bg-espresso-800 p-8 sm:p-10 text-center max-w-xl mx-auto"
        >
          <h3 class="font-serif text-xl font-bold text-espresso-900 dark:text-alabaster-100 mb-2">
            No projects match "{{ searchQuery || selectedCategory }}"
          </h3>
          <p class="text-sm text-espresso-800 dark:text-alabaster-200 mb-5">
            All three projects focus on web portals, UI/UX design, and quality assurance. Clear your search filter to view VetConnect, AskAudrey, and BlueFox.
          </p>
          <button
            type="button"
            class="min-h-[44px] px-5 py-2.5 rounded-lg bg-peony-300 hover:bg-peony-200 text-espresso-900 font-semibold text-sm border border-espresso-900/30"
            @click="resetFilters"
          >
            Show All Projects
          </button>
        </div>
        <div v-else class="project-grid">
          <article v-for="project in filteredProjects" :key="project.id" class="project-card">
            <div class="flex items-start gap-3">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-peony-300/20 text-espresso-900 dark:text-peony-200" aria-hidden="true">
                <PortfolioIcon :name="project.icon" />
              </span>
              <div>
                <p class="eyebrow mb-2">{{ project.category }}</p>
                <h3 class="font-serif text-xl font-semibold leading-snug text-espresso-900 dark:text-alabaster-100">{{ project.shortTitle }}</h3>
              </div>
            </div>
            <p class="text-sm leading-7 text-espresso-800 dark:text-alabaster-200">{{ project.description }}</p>
            <div class="rounded-xl border border-peony-500/20 bg-peony-50 dark:bg-espresso-900/70 p-4">
              <p class="eyebrow mb-2">My focus</p>
              <p class="text-sm font-medium leading-relaxed text-espresso-900 dark:text-alabaster-100">{{ project.focus }}</p>
            </div>
            <ul :aria-label="`${project.shortTitle} focus tags`" class="flex flex-wrap content-start items-start gap-2 border-t border-peony-500/20 pt-5">
              <li v-for="tag in project.tags" :key="tag" class="rounded-full bg-peony-100 dark:bg-espresso-900/60 px-3 py-1.5 text-xs leading-5 text-espresso-800 dark:text-alabaster-200">{{ tag }}</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
