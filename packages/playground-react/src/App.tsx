function App() {
  return (
    <div className="max-w-lg mx-auto flex flex-col gap-5 p-5">
      <div className="flex flex-col gap-3">
        <p className="text-black font-bold text-2xl">1. Accordion</p>

        <div className="dark:bg-black">
          <div className="hs-accordion-group">
            <div className="hs-accordion active" id="hs-basic-heading-one">
              <button
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                aria-controls="hs-basic-collapse-one"
              >
                <svg
                  className="hs-accordion-active:hidden block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg
                  className="hs-accordion-active:block hidden size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
                Accordion #1
              </button>
              <div
                id="hs-basic-collapse-one"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-heading-one"
              >
                <p className="text-gray-800 dark:text-neutral-200">
                  <em>This is the third item's accordion body.</em> It is
                  hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions.
                </p>
              </div>
            </div>

            <div className="hs-accordion" id="hs-basic-heading-two">
              <button
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                aria-controls="hs-basic-collapse-two"
              >
                <svg
                  className="hs-accordion-active:hidden block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg
                  className="hs-accordion-active:block hidden size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
                Accordion #2
              </button>
              <div
                id="hs-basic-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-heading-two"
              >
                <p className="text-gray-800 dark:text-neutral-200">
                  <em>This is the third item's accordion body.</em> It is
                  hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions.
                </p>
              </div>
            </div>

            <div className="hs-accordion" id="hs-basic-heading-three">
              <button
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                aria-controls="hs-basic-collapse-three"
              >
                <svg
                  className="hs-accordion-active:hidden block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg
                  className="hs-accordion-active:block hidden size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
                Accordion #3
              </button>
              <div
                id="hs-basic-collapse-three"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-heading-three"
              >
                <p className="text-gray-800 dark:text-neutral-200">
                  <em>This is the third item's accordion body.</em> It is
                  hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr></hr>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-black font-bold text-2xl">2. Collapse</p>
        <div className="dark:bg-black">
          <button
            type="button"
            className="hs-collapse-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            id="hs-basic-collapse"
            data-hs-collapse="#hs-basic-collapse-heading"
          >
            Collapse
            <svg
              className="hs-collapse-open:rotate-180 flex-shrink-0 size-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>

          <div
            id="hs-basic-collapse-heading"
            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-collapse"
          >
            <div className="mt-5">
              <p className="text-gray-500 dark:text-neutral-400">
                This is a collapse body. It is hidden by default, until the
                collapse plugin adds the appropriate classes that we use to
                style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS
                transitions.
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-black font-bold text-2xl">3. Carousel</p>
        <div className="dark:bg-black">
          <div
            data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }'
            className="relative"
          >
            <div className="hs-carousel relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
              <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                <div className="hs-carousel-slide">
                  <div className="flex justify-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
                    <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                      First slide
                    </span>
                  </div>
                </div>
                <div className="hs-carousel-slide">
                  <div className="flex justify-center h-full bg-gray-200 p-6 dark:bg-neutral-800">
                    <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                      Second slide
                    </span>
                  </div>
                </div>
                <div className="hs-carousel-slide">
                  <div className="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
                    <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                      Third slide
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10"
            >
              <span className="text-2xl" aria-hidden="true">
                <svg
                  className="flex-shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </span>
              <span className="sr-only">Previous</span>
            </button>
            <button
              type="button"
              className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10"
            >
              <span className="sr-only">Next</span>
              <span className="text-2xl" aria-hidden="true">
                <svg
                  className="flex-shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>

            <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
              <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
              <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
              <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-black font-bold text-2xl">4. Copy Markup</p>
        <div className="dark:bg-black">
          <div id="hs-wrapper-for-copy" className="space-y-3">
            <input
              id="hs-content-for-copy"
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Enter Name"
            />
          </div>

          <p className="mt-3 text-end">
            <button
              type="button"
              data-hs-copy-markup='{
      "targetSelector": "#hs-content-for-copy",
      "wrapperSelector": "#hs-wrapper-for-copy",
      "limit": 3
    }'
              id="hs-copy-content"
              className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-dashed border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
            >
              <svg
                className="flex-shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Add Name
            </button>
          </p>
        </div>
        <hr></hr>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-black font-bold text-2xl">5. Stepper</p>
        <div>
          <div data-hs-stepper='{
  "isCompleted": true
}' className="completed">
            <ul className="relative flex flex-row gap-x-2">
              <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group success" data-hs-stepper-nav-item='{
      "index": 1,
      "isCompleted": true
    }'>
                <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                  <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
                    <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">1</span>
                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500">
                    Step
                  </span>
                </span>
                <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
              </li>

              <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group success" data-hs-stepper-nav-item='{
      "index": 2,
      "isCompleted": true
    }'>
                <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                  <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
                    <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500">
                    Step
                  </span>
                </span>
                <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
              </li>

              <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group active success" data-hs-stepper-nav-item='{
      "index": 3,
      "isCompleted": true
    }'>
                <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                  <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
                    <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
                    <svg className="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500">
                    Step
                  </span>
                </span>
                <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
              </li>
            </ul>

            <div className="mt-5 sm:mt-8">
              <div data-hs-stepper-content-item='{
      "index": 1,
      "isCompleted": true
    }' style={{ display: "none" }}>
                <div className="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                  <h3 className="text-gray-500">
                    First content
                  </h3>
                </div>
              </div>

              <div data-hs-stepper-content-item='{
      "index": 2,
      "isCompleted": true
    }' style={{ display: "none" }}>
                <div className="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                  <h3 className="text-gray-500">
                    Second content
                  </h3>
                </div>
              </div>

              <div data-hs-stepper-content-item='{
      "index": 3,
      "isCompleted": true
    }' style={{ display: "none" }}>
                <div className="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                  <h3 className="text-gray-500">
                    Third content
                  </h3>
                </div>
              </div>

              <div data-hs-stepper-content-item='{
      "isFinal": true
    }'>
                <div className="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                  <h3 className="text-gray-500">
                    Final content
                  </h3>
                </div>
              </div>

              <div className="mt-5 flex justify-between items-center gap-x-2">
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-back-btn="" style={{ display: "none" }}>
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                  Back
                </button>
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-next-btn="" style={{ display: "none" }}>
                  Next
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-finish-btn="" style={{ display: "none" }}>
                  Finish
                </button>
                <button type="reset" className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-reset-btn="">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-black font-bold text-2xl">6. Toggle Count</p>
        <div>
          <div className="flex justify-center mb-4">
            <div>
              <label htmlFor="toggle-count-switch" className="inline-block p-2">
                <span className="inline-block text-sm text-gray-800 cursor-pointer">
                  Monthly
                </span>
              </label>
              <input id="toggle-count-switch" name="toggle-count-switch" type="checkbox" className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none 

    before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200" />
              <label htmlFor="toggle-count-switch" className="inline-block p-2">
                <span className="inline-block text-sm text-gray-800 cursor-pointer">
                  Annual
                </span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-3 lg:items-center border border-gray-200 rounded-xl">
            <div className="flex flex-col p-4">
              <h4 className="text-gray-800 mb-1">Startup</h4>
              <div className="flex gap-x-1">
                <span className="text-xl font-normal text-gray-800">$</span>
                <p data-hs-toggle-count='{
          "target": "#toggle-count-switch",
          "min": 19,
          "max": 29
        }' className="text-gray-800 font-semibold text-3xl">
                  19
                </p>
              </div>
            </div>

            <div className="flex flex-col p-4">
              <div className="flex justify-between">
                <h4 className="text-gray-800 mb-1">Team</h4>
              </div>
              <div className="flex gap-x-1">
                <span className="text-xl font-normal text-gray-800">$</span>
                <p data-hs-toggle-count='{
          "target": "#toggle-count-switch",
          "min": 89,
          "max": 99
        }' className="text-gray-800 font-semibold text-3xl">
                  89
                </p>
              </div>
            </div>

            <div className="flex flex-col p-4">
              <h4 className="text-gray-800 mb-1">Enterprise</h4>
              <div className="flex gap-x-1">
                <span className="text-xl font-normal text-gray-800">$</span>
                <p data-hs-toggle-count='{
          "target": "#toggle-count-switch",
          "min": 129,
          "max": 149
        }' className="text-gray-800 font-semibold text-3xl">
                  129
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
      {/* <div className="flex flex-col gap-3">
          <p className="text-black font-bold text-2xl">1. Accordion Test</p>
          <div></div>
          <hr></hr>
        </div> */}
    </div>
  )
}

export default App
