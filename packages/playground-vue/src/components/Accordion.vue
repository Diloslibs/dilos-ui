<template>
  <div class="my-0 mx-auto min-h-full max-w-screen-md py-16">
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-3">
        <h1 class="text-2xl font-bold">Accordion</h1>
        <p>Default</p>
        <div id="accordion-collapse" class="d-accordion" data-accordion="collapse">
          <div class="item-accordion">
            <button type="button" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
              aria-controls="accordion-collapse-body-1">
              <span>Apa itu Dilos?</span>
              <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5 5 1 1 5" />
              </svg>
            </button>
            <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
              <div class="p-5 border border-b-0 border-gray-200">
                <p class="mb-2 text-gray-500">
                  DilosUI is an open-source library of
                  interactive components built on top of
                  Tailwind CSS including buttons,
                  dropdowns, modals, navbars, and more.
                </p>
                <p class="text-gray-500">
                  Check out this guide to learn how to
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 hover:underline">get started</a>
                  and start developing websites even
                  faster with components on top of
                  Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
          <div class="item-accordion">
            <button type="button" data-accordion-target="#accordion-collapse-body-2" aria-expanded="true"
              aria-controls="accordion-collapse-body-1">
              <span>What is DilosUI?</span>
              <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5 5 1 1 5" />
              </svg>
            </button>
            <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
              <div class="p-5 border border-b-0 border-gray-200">
                <p class="mb-2 text-gray-500">
                  DilosUI is an open-source library of
                  interactive components built on top of
                  Tailwind CSS including buttons,
                  dropdowns, modals, navbars, and more.
                </p>
                <p class="text-gray-500">
                  Check out this guide to learn how to
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 hover:underline">get started</a>
                  and start developing websites even
                  faster with components on top of
                  Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <p>Flat</p>
        <div id="accordion-flat" class="d-accordion flat" data-accordion="collapse">
          <div class="item-accordion">
            <button type="button" data-accordion-target="#accordion-flat-body-1" aria-expanded="true"
              aria-controls="accordion-flat-body-1">
              <span>What is DilosUI?</span>
              <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5 5 1 1 5" />
              </svg>
            </button>
            <div id="accordion-flat-body-1" class="hidden" aria-labelledby="accordion-flat-heading-1">
              <div class="p-5">
                <p class="mb-2 text-gray-500">
                  DilosUI is an open-source library of
                  interactive components built on top of
                  Tailwind CSS including buttons,
                  dropdowns, modals, navbars, and more.
                </p>
                <p class="text-gray-500">
                  Check out this guide to learn how to
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 hover:underline">get started</a>
                  and start developing websites even
                  faster with components on top of
                  Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
          <div class="item-accordion">
            <button type="button" data-accordion-target="#accordion-flat-body-2" aria-expanded="true"
              aria-controls="accordion-flat-body-1">
              <span>What is DilosUI?</span>
              <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5 5 1 1 5" />
              </svg>
            </button>
            <div id="accordion-flat-body-2" class="hidden" aria-labelledby="accordion-flat-heading-2">
              <div class="p-5">
                <p class="mb-2 text-gray-500">
                  DilosUI is an open-source library of
                  interactive components built on top of
                  Tailwind CSS including buttons,
                  dropdowns, modals, navbars, and more.
                </p>
                <p class="text-gray-500">
                  Check out this guide to learn how to
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 hover:underline">get started</a>
                  and start developing websites even
                  faster with components on top of
                  Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
