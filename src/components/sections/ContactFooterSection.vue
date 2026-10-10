<script setup lang="ts">
import type { PortfolioData } from '../../data/portfolioData'
import { computed, reactive, ref } from 'vue'
const props = defineProps<{ profile: PortfolioData['profile']; navigation: PortfolioData['navigation'] }>()
const form = reactive({ name: '', email: '', message: '' })
const draftOpened = ref(false)
const hasEmail = computed(() => Boolean(props.profile.email?.trim()))
function prepareEmail() {
  if (!hasEmail.value) return
  const subject = encodeURIComponent(`Portfolio inquiry from ${form.name.trim()}`)
  const body = encodeURIComponent(`${form.message.trim()}\n\nFrom: ${form.name.trim()}\nReply to: ${form.email.trim()}`)
  window.location.href = `mailto:${props.profile.email}?subject=${subject}&body=${body}`
  draftOpened.value = true
}
</script>

<template>
  <footer id="contact" aria-labelledby="contact-heading" class="section-spacing bg-peony-100 dark:bg-espresso-950">
    <div class="page-container">
      <div class="grid gap-10 md:grid-cols-2 lg:gap-20">
        <div>
          <p class="eyebrow mb-4">Have a project in mind?</p>
          <h2 id="contact-heading" class="font-serif fluid-section-title font-semibold mb-5">Let’s Work Together</h2>
          <p class="fluid-body text-espresso-800 dark:text-alabaster-200 max-w-md">Send a message for graphic design, web development, quality assurance, or virtual assistance projects.</p>
          <dl class="mt-8 space-y-5 text-sm">
            <div><dt class="eyebrow mb-1">Based in</dt><dd>{{ profile.location }}</dd></div>
            <div><dt class="eyebrow mb-1">Education</dt><dd class="leading-relaxed">{{ profile.degree }}<br />{{ profile.university }}</dd></div>
            <div v-if="hasEmail"><dt class="eyebrow mb-1">Email</dt><dd><a :href="`mailto:${profile.email}`" class="underline underline-offset-4 break-all">{{ profile.email }}</a></dd></div>
          </dl>
        </div>
        <form class="surface-card p-6 sm:p-8 space-y-5" @submit.prevent="prepareEmail">
          <div class="grid gap-5 sm:grid-cols-2">
            <div><label for="contact-name" class="field-label">Your name</label><input id="contact-name" v-model="form.name" class="form-input" autocomplete="name" placeholder="Your Name" required /></div>
            <div><label for="contact-email" class="field-label">Your email</label><input id="contact-email" v-model="form.email" class="form-input" type="email" autocomplete="email" placeholder="youremail@example.com" required /></div>
          </div>
          <div><label for="contact-message" class="field-label">What are you working on?</label><textarea id="contact-message" v-model="form.message" class="form-input min-h-36 resize-y" rows="5" minlength="10" placeholder="Tell me a little about your project…" required></textarea></div>
          <button type="submit" :disabled="!hasEmail" aria-describedby="contact-note" class="button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">Prepare email</button>
          <p v-if="draftOpened" role="status" class="text-sm">Your email app was requested. Review and send your draft there.</p>
        </form>
      </div>
      <div class="mt-16 pt-6 border-t border-peony-500/25 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p class="text-sm text-espresso-800 dark:text-alabaster-300">© {{ new Date().getFullYear() }} All rights reserved</p>
        <nav aria-label="Footer quick links" class="flex flex-wrap gap-x-5 gap-y-1">
          <a v-for="item in navigation" :key="item.href" :href="item.href" class="inline-flex items-center min-h-11 text-xs hover:underline underline-offset-4">{{ item.label }}</a>
          <a href="#hero" class="inline-flex items-center min-h-11 text-xs hover:underline underline-offset-4">Back to top ↑</a>
        </nav>
      </div>
    </div>
  </footer>
</template>
