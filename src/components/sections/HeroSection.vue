<script setup lang="ts">
import type { Profile } from '../../data/portfolioData'
defineProps<{ profile: Profile; isDark: boolean }>()
</script>

<template>
  <section
    id="hero"
    class="hero-ambient relative border-b border-peony-500/20"
  >
    <div class="page-container pt-24 pb-16 sm:pt-28 sm:pb-24 lg:py-32">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div class="md:col-span-7 space-y-5 text-left">
          <p class="text-sm sm:text-base font-medium text-espresso-800 dark:text-alabaster-300">
            {{ profile.degree }} · {{ profile.university }}
          </p>

          <h1 class="font-serif fluid-hero-title font-bold tracking-tight text-espresso-900 dark:text-alabaster-100">
            Hi there, I’m {{ profile.name }}
          </h1>

          <p class="font-serif italic text-lg sm:text-xl text-espresso-800 dark:text-peony-200">
            {{ profile.headline }}
          </p>

          <p class="fluid-body text-espresso-800 dark:text-alabaster-200 max-w-xl">
            {{ profile.heroSummary }}
          </p>

          <div class="pt-2 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              class="button-primary"
            >
              {{ profile.primaryCta }}
            </a>

            <a
              href="#contact"
              class="button-secondary"
            >
              {{ profile.secondaryCta }}
            </a>
            <a :href="profile.cvUrl" download="Kurt-CV.pdf" class="button-secondary gap-2">
              <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        <div class="md:col-span-5 flex flex-col items-center md:items-end">
          <div
            class="w-full max-w-[300px] sm:max-w-[320px] p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-mauve-500/60 via-peony-500/50 to-peony-300/80 border border-peony-500 shadow-xl"
          >
            <div
              class="relative aspect-square w-full rounded-2xl border-2 border-espresso-900/75 bg-gradient-to-b from-peony-300 to-peony-200 text-espresso-900 overflow-hidden flex flex-col items-center justify-center text-center"
            >
              <img
                v-if="profile.photoUrl"
                :src="isDark && profile.darkPhotoUrl ? profile.darkPhotoUrl : profile.photoUrl"
                :alt="`Portrait of ${profile.name}`"
                width="1180"
                height="1333"
                fetchpriority="high"
                class="absolute inset-0 w-full h-full object-cover object-center"
              />

              <template v-else>
                <div
                  class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-espresso-900 text-alabaster-100 font-serif text-4xl sm:text-5xl font-bold flex items-center justify-center border-2 border-peony-200 shadow-md mb-3"
                  aria-hidden="true"
                >
                  {{ profile.monogram }}
                </div>
                <p class="font-serif text-lg font-bold text-espresso-900">
                  {{ profile.name }}
                </p>
                <p class="text-xs font-semibold text-espresso-800 mt-0.5">
                  BS Computer Engineering
                </p>

              </template>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
