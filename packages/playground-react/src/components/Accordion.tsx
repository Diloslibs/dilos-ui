const Accordion = () => {
  return (
    <div className="my-0 mx-auto min-h-full max-w-screen-md py-16">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Accordion</h1>
          <p>Default</p>
          <div id="accordion-collapse" className="d-accordion" data-accordion="collapse">
            <div className="item-accordion">
              <button type="button" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                aria-controls="accordion-collapse-body-1">
                <span>Apa itu Dilos?</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5 5 1 1 5" />
                </svg>
              </button>
              <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-5 border border-b-0 border-gray-200">
                  <p className="mb-2 text-gray-500">
                    DilosUI is an open-source library of
                    interactive components built on top of
                    Tailwind CSS including buttons,
                    dropdowns, modals, navbars, and more.
                  </p>
                  <p className="text-gray-500">
                    Check out this guide to learn how to
                    <a href="/docs/getting-started/introduction/" className="text-blue-600 hover:underline"> get started </a>
                    and start developing websites even
                    faster with components on top of
                    Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
            <div className="item-accordion">
              <button type="button" data-accordion-target="#accordion-collapse-body-2" aria-expanded="true"
                aria-controls="accordion-collapse-body-1">
                <span>What is DilosUI?</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5 5 1 1 5" />
                </svg>
              </button>
              <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                <div className="p-5 border border-b-0 border-gray-200">
                  <p className="mb-2 text-gray-500">
                    DilosUI is an open-source library of
                    interactive components built on top of
                    Tailwind CSS including buttons,
                    dropdowns, modals, navbars, and more.
                  </p>
                  <p className="text-gray-500">
                    Check out this guide to learn how to
                    <a href="/docs/getting-started/introduction/" className="text-blue-600 hover:underline">get started</a>
                    and start developing websites even
                    faster with components on top of
                    Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p>Flat</p>
          <div id="accordion-flat" className="d-accordion flat" data-accordion="collapse">
            <div className="item-accordion">
              <button type="button" data-accordion-target="#accordion-flat-body-1" aria-expanded="true"
                aria-controls="accordion-flat-body-1">
                <span>What is DilosUI?</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5 5 1 1 5" />
                </svg>
              </button>
              <div id="accordion-flat-body-1" className="hidden" aria-labelledby="accordion-flat-heading-1">
                <div className="p-5">
                  <p className="mb-2 text-gray-500">
                    DilosUI is an open-source library of
                    interactive components built on top of
                    Tailwind CSS including buttons,
                    dropdowns, modals, navbars, and more.
                  </p>
                  <p className="text-gray-500">
                    Check out this guide to learn how to
                    <a href="/docs/getting-started/introduction/" className="text-blue-600 hover:underline">get started</a>
                    and start developing websites even
                    faster with components on top of
                    Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
            <div className="item-accordion">
              <button type="button" data-accordion-target="#accordion-flat-body-2" aria-expanded="true"
                aria-controls="accordion-flat-body-1">
                <span>What is DilosUI?</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5 5 1 1 5" />
                </svg>
              </button>
              <div id="accordion-flat-body-2" className="hidden" aria-labelledby="accordion-flat-heading-2">
                <div className="p-5">
                  <p className="mb-2 text-gray-500">
                    DilosUI is an open-source library of
                    interactive components built on top of
                    Tailwind CSS including buttons,
                    dropdowns, modals, navbars, and more.
                  </p>
                  <p className="text-gray-500">
                    Check out this guide to learn how to
                    <a href="/docs/getting-started/introduction/" className="text-blue-600 hover:underline">get started</a>
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
  )
}

export default Accordion