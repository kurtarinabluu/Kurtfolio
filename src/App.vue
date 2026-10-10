<script setup lang="ts">
import { useTheme } from './composables/useTheme'
import { portfolioData } from './data/portfolioData'
import PortfolioIcon from './components/ui/PortfolioIcon.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import ContactFooterSection from './components/sections/ContactFooterSection.vue'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-peony-300 focus:px-4 focus:py-3 focus:text-espresso-900">Skip to main content</a>
    <button
      type="button"
      class="absolute right-5 top-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-espresso-900/20 bg-peony-300 text-espresso-900 shadow-sm transition-colors hover:bg-peony-200 sm:right-8 sm:top-6"
      :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
      :title="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
      @click="toggleTheme"
    >
      <PortfolioIcon :name="isDark ? 'moon' : 'sun'" />
    </button>

    <main id="main-content" class="flex-1">
      <HeroSection
        :profile="portfolioData.profile"
        :is-dark="isDark"
      />

      <AboutSection :about="portfolioData.about" />

      <SkillsSection :skills="portfolioData.skills" />

      <ProjectsSection
        :projects="portfolioData.projects"
      />

      <ExperienceSection :experience="portfolioData.experience" />
    </main>

    <ContactFooterSection
      :profile="portfolioData.profile"
      :navigation="portfolioData.navigation"
    />

  </div>
</template>
