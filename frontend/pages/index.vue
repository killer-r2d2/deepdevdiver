<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="
            text-base text-indigo-600
            font-semibold
            tracking-wide
            uppercase
          "
        >
          base-frontend
        </h2>
        <p
          class="
            mt-2
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          A Nuxt Frontend for quicker starts
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          To list a bit, the green ones are already installed, the reds might
          need to be added as this project is a work in progress for a base
          website.
        </p>
      </div>

      <div class="mt-10">
        <dl
          class="
            space-y-10
            md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10
          "
        >
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div
                class="
                  absolute
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-md
                  text-white
                "
                :class="{ 'bg-green-500': feature.installed, 'bg-orange-500': !feature.installed }"
              >
                <component
                  :is="feature.icon"
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                {{ feature.name }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  AnnotationIcon,
  CodeIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/vue/outline";

const features = [
  {
    name: "@nuxtjs/tailwindcss",
    description:
      "@nuxtjs/tailwindcss is a Tailwind CSS plugin for Nuxt.js. It provides a full set of Tailwind CSS classes for your Nuxt.js project.",
    icon: CodeIcon,
    installed: true,
  },
  {
    name: "@heroicons/vue",
    description:
      "The @heroicons/vue package provides a set of icons for use in your Vue.js applications.",
    icon: CodeIcon,
    installed: true,
  },
  {
    name: "@headlessui/vue",
    description:
      "The @headlessui/vue package provides a set of components for use in your Vue.js applications.",
    icon: CodeIcon,
    installed: true,
  },
  {
    name: "daisyui",
    description:
      "The daisyui package provides a set of components for use in your Vue.js applications. ",
    icon: CodeIcon,
    installed: false,
  },
];
</script>