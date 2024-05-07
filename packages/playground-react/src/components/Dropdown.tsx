const Dropdown = () => {
  return (
    <div className="my-0 mx-auto min-h-full max-w-screen-md py-16">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Dropdown</h1>
          <p className="text-xl font-semibold">Basic Dropdown</p>
          <div className="flex gap-3">
            <div className="">
              <button
                d-dropdown-toggle="dropdown-basic"
                d-dropdown-trigger="click"
                d-dropdown-place="bottom-start"
                className="d-btn primary xs">
                Basic Dropdown
              </button>

              <div id="dropdown-basic" className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-item">Dashboard</div>
                  <div className="d-dropdown-item">Settings</div>
                  <div className="d-dropdown-item">Earnings</div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">Sign out</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xl font-semibold">
            Dropdown With Header & Footer
          </p>
          <div className="flex gap-3">
            <div className="">
              <button
                d-dropdown-toggle="dropdown-header"
                d-dropdown-trigger="click"
                d-dropdown-place="bottom-start"
                className="d-btn primary xs">
                Header & Footer
              </button>

              <div id="dropdown-header" className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-header">Header</div>
                  <div className="d-dropdown-item">Dashboard</div>
                  <div className="d-dropdown-item">Settings</div>
                  <div className="d-dropdown-item">Earnings</div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">Sign out</div>
                  <div className="d-dropdown-footer">Footer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xl font-semibold">Dropdown Checkbox</p>
          <div className="flex gap-3">
            <div className="">
              <button
                d-dropdown-toggle="dropdown-checkbox"
                d-dropdown-trigger="click"
                d-dropdown-place="bottom-start"
                className="d-btn primary xs">
                Dropdown Checkbox
              </button>

              <div
                id="dropdown-checkbox"
                className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-item">
                    <div className="d-checkbox sm">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value="" />
                      <label
                        htmlFor="default-checkbox"
                        className="label-checkbox">
                        Default checkbox
                      </label>
                    </div>
                  </div>
                  <div className="d-dropdown-item">
                    <div className="d-checkbox sm">
                      <input
                        id="default-checkbox-2"
                        type="checkbox"
                        value="" />
                      <label
                        htmlFor="default-checkbox-2"
                        className="label-checkbox">
                        Default checkbox 2
                      </label>
                    </div>
                  </div>
                  <div className="d-dropdown-item">
                    <div className="d-checkbox sm">
                      <input
                        id="default-checkbox-3"
                        type="checkbox"
                        value="" />
                      <label
                        htmlFor="default-checkbox-3"
                        className="label-checkbox">
                        Default checkbox 3
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xl font-semibold">Dropdown With Icons</p>
          <div className="flex gap-3">
            <div className="">
              <button
                d-dropdown-toggle="dropdown-icons"
                d-dropdown-trigger="click"
                d-dropdown-place="bottom-start"
                className="d-btn primary xs">
                With Icons
              </button>

              <div id="dropdown-icons" className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.5 8.00006C10.5 9.38077 9.38071 10.5001 8 10.5001C6.61929 10.5001 5.5 9.38077 5.5 8.00006C5.5 6.61935 6.61929 5.50006 8 5.50006C9.38071 5.50006 10.5 6.61935 10.5 8.00006ZM10.5 8.00006C10.5 9.38131 11 10.5001 12.25 10.5001C13.5 10.5001 14 9.38131 14 8.00006C13.9997 6.66325 13.553 5.36484 12.7307 4.31084C11.9084 3.25685 10.7577 2.50764 9.46114 2.1821C8.16458 1.85655 6.79644 1.97333 5.5738 2.51389C4.35116 3.05445 3.34407 3.98784 2.71231 5.16594C2.08055 6.34404 1.86032 7.69938 2.08656 9.0169C2.3128 10.3344 2.97255 11.5387 3.96113 12.4385C4.94971 13.3384 6.21049 13.8823 7.54342 13.9841C8.87634 14.0858 10.2051 13.7395 11.3188 13.0001M10.5 8.00006L10.5 5.50006"
                        stroke="#101828"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>
                    Show mentions
                  </div>
                  <div className="d-dropdown-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 6.5H10M6 8.5H10M9.35625 12.2437L8.43125 13.7875C8.38595 13.8612 8.32253 13.922 8.24703 13.9642C8.17154 14.0064 8.08649 14.0286 8 14.0286C7.91351 14.0286 7.82846 14.0064 7.75297 13.9642C7.67747 13.922 7.61405 13.8612 7.56875 13.7875L6.64375 12.2437C6.60024 12.1697 6.53815 12.1082 6.46362 12.0654C6.38908 12.0227 6.30468 12.0001 6.21875 12H2.5C2.36739 12 2.24021 11.9473 2.14645 11.8536C2.05268 11.7598 2 11.6326 2 11.5V3.5C2 3.36739 2.05268 3.24021 2.14645 3.14645C2.24021 3.05268 2.36739 3 2.5 3H13.5C13.6326 3 13.7598 3.05268 13.8536 3.14645C13.9473 3.24021 14 3.36739 14 3.5V11.5C14 11.6326 13.9473 11.7598 13.8536 11.8536C13.7598 11.9473 13.6326 12 13.5 12H9.78125C9.69532 12.0001 9.61092 12.0227 9.53638 12.0654C9.46185 12.1082 9.39976 12.1697 9.35625 12.2437Z"
                        stroke="#101828"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>
                    Mention in Job notes
                  </div>
                  <div className="d-dropdown-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2 3.5H14M2 3.5V12C2 12.1326 2.05268 12.2598 2.14645 12.3536C2.24021 12.4473 2.36739 12.5 2.5 12.5H13.5C13.6326 12.5 13.7598 12.4473 13.8536 12.3536C13.9473 12.2598 14 12.1326 14 12V3.5M2 3.5L8 9L14 3.5"
                        stroke="#101828"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>
                    Send Email
                  </div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.75 6.5L7.08125 10L5.25 8.25M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
                        stroke="#101828"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>
                    Approve estimate
                  </div>
                  <div className="d-dropdown-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10 6L6 10M10 10L6 6M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
                        stroke="#101828"
                        strokeLinecap="round" />
                    </svg>

                    Reject estimate
                  </div>
                  <div className="d-dropdown-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.5 10.5H13.5V2.5H5.5V5.5M2.5 5.5H10.5V13.5H2.5V5.5Z"
                        stroke="#101828"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>
                    Make a copy
                  </div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 8V2.5C3 2.36739 3.05268 2.24021 3.14645 2.14645C3.24021 2.05268 3.36739 2 3.5 2H9.5M9.5 2L13 5.5M9.5 2V5.5H13M13 5.5V8M3 12.5H4C4.26522 12.5 4.51957 12.3946 4.70711 12.2071C4.89464 12.0196 5 11.7652 5 11.5C5 11.2348 4.89464 10.9804 4.70711 10.7929C4.51957 10.6054 4.26522 10.5 4 10.5H3V13.5M13.5 10.5H11.75V13.5M13.25 12.25H11.75M8 13.5C8.39782 13.5 8.77936 13.342 9.06066 13.0607C9.34196 12.7794 9.5 12.3978 9.5 12C9.5 11.6022 9.34196 11.2206 9.06066 10.9393C8.77936 10.658 8.39782 10.5 8 10.5H7.125V13.5H8Z"
                        stroke="#101828"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>

                    Dowload pdf
                  </div>
                  <div className="d-dropdown-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.5 5C3.5 5.27614 3.72386 5.5 4 5.5C4.27614 5.5 4.5 5.27614 4.5 5H3.5ZM4 2.5V2C3.72386 2 3.5 2.22386 3.5 2.5H4ZM12 2.5H12.5C12.5 2.22386 12.2761 2 12 2V2.5ZM11.5 5C11.5 5.27614 11.7239 5.5 12 5.5C12.2761 5.5 12.5 5.27614 12.5 5H11.5ZM4 9.5V9C3.72386 9 3.5 9.22386 3.5 9.5H4ZM12 9.5H12.5C12.5 9.22386 12.2761 9 12 9V9.5ZM12 13.75V14.25C12.2761 14.25 12.5 14.0261 12.5 13.75H12ZM4 13.75H3.5C3.5 14.0261 3.72386 14.25 4 14.25V13.75ZM4 11.5C4.27614 11.5 4.5 11.2761 4.5 11C4.5 10.7239 4.27614 10.5 4 10.5V11.5ZM1.75 11H1.25C1.25 11.2761 1.47386 11.5 1.75 11.5V11ZM14.25 11V11.5C14.5261 11.5 14.75 11.2761 14.75 11H14.25ZM12 10.5C11.7239 10.5 11.5 10.7239 11.5 11C11.5 11.2761 11.7239 11.5 12 11.5V10.5ZM11.75 6.99998L11.75 6.49998L11.7499 6.49998L11.75 6.99998ZM11.5933 7.05518L11.2798 6.6657L11.5933 7.05518ZM11.75 7.25L11.3604 7.56334L11.5105 7.75H11.75V7.25ZM4.5 5V2.5H3.5V5H4.5ZM4 3H12V2H4V3ZM11.5 2.5V5H12.5V2.5H11.5ZM4 10H12V9H4V10ZM11.5 9.5V13.75H12.5V9.5H11.5ZM12 13.25H4V14.25H12V13.25ZM4.5 13.75V9.5H3.5V13.75H4.5ZM4 10.5H1.75V11.5H4V10.5ZM2.25 11V6H1.25V11H2.25ZM2.25 6C2.25 5.76247 2.47585 5.5 2.83125 5.5V4.5C1.99915 4.5 1.25 5.13753 1.25 6H2.25ZM2.83125 5.5H13.1687V4.5H2.83125V5.5ZM13.1687 5.5C13.5241 5.5 13.75 5.76247 13.75 6H14.75C14.75 5.13753 14.0009 4.5 13.1687 4.5V5.5ZM13.75 6V11H14.75V6H13.75ZM14.25 10.5H12V11.5H14.25V10.5ZM11.75 7C11.888 7 12 7.11186 12 7.25H11C11 7.66428 11.3359 8 11.75 8V7ZM11.5 7.25C11.5 7.11193 11.6119 7 11.75 7V8C12.1642 8 12.5 7.66421 12.5 7.25H11.5ZM11.75 7.49998C11.6119 7.49998 11.5 7.38809 11.5 7.25H12.5C12.5 6.83576 12.1642 6.49998 11.75 6.49998V7.49998ZM11.3964 7.35354L11.6465 7.60356L12.3535 6.89644L12.1035 6.64642L11.3964 7.35354ZM11.7499 6.49998C11.5723 6.5 11.4081 6.56238 11.2798 6.6657L11.9069 7.44465C11.8643 7.47895 11.809 7.49998 11.75 7.49998L11.7499 6.49998ZM11.2798 6.6657C11.1101 6.80231 11 7.01344 11 7.25H12C12 7.32905 11.9627 7.39969 11.9069 7.44465L11.2798 6.6657ZM11.2037 7.36851C11.2664 7.44644 11.3055 7.49515 11.329 7.52437C11.3408 7.53899 11.3486 7.54873 11.3535 7.55482C11.356 7.55786 11.3577 7.55999 11.3588 7.56136C11.3593 7.56204 11.3597 7.56254 11.36 7.56286C11.3601 7.56302 11.3602 7.56314 11.3603 7.56322C11.3603 7.56326 11.3603 7.56329 11.3603 7.56331C11.3603 7.56332 11.3604 7.56333 11.3604 7.56333C11.3604 7.56333 11.3604 7.56334 11.3604 7.56334C11.3604 7.56334 11.3604 7.56334 11.3604 7.56334C11.3604 7.56334 11.3604 7.56334 11.75 7.25C12.1396 6.93666 12.1396 6.93666 12.1396 6.93666C12.1396 6.93666 12.1396 6.93666 12.1396 6.93666C12.1396 6.93666 12.1396 6.93666 12.1396 6.93665C12.1396 6.93665 12.1396 6.93664 12.1396 6.93663C12.1396 6.93661 12.1396 6.93658 12.1395 6.93654C12.1395 6.93647 12.1394 6.93635 12.1393 6.93619C12.139 6.93586 12.1386 6.93537 12.138 6.93468C12.1369 6.93331 12.1352 6.93118 12.1328 6.92814C12.1279 6.92205 12.1201 6.91231 12.1083 6.8977C12.0848 6.86847 12.0456 6.81977 11.983 6.74184L11.2037 7.36851ZM11.75 7.75H12V6.75H11.75V7.75Z"
                        fill="#101828" />
                    </svg>

                    Print estimate
                  </div>
                  <div className="d-dropdown-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.75 6.5H11.25M4.75 8.5H11.25M2 13V3.5C2 3.36739 2.05268 3.24021 2.14645 3.14645C2.24021 3.05268 2.36739 3 2.5 3H13.5C13.6326 3 13.7598 3.05268 13.8536 3.14645C13.9473 3.24021 14 3.36739 14 3.5V13L12 12L10 13L8 12L6 13L4 12L2 13Z"
                        stroke="#101828"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>

                    Generate invoice
                  </div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.5 3.5H2.5M6.5 6.5V10.5M9.5 6.5V10.5M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5M10.5 3.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H6.5C6.23478 1.5 5.98043 1.60536 5.79289 1.79289C5.60536 1.98043 5.5 2.23478 5.5 2.5V3.5"
                        stroke="#101828"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>

                    <div className="text-red-600 font-semibold">
                      Delete estimate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xl font-semibold">
            Dropdown With Search Bar
          </p>
          <div className="flex gap-3">
            <div className="">
              <button
                d-dropdown-toggle="dropdown-search"
                d-dropdown-trigger="click"
                d-dropdown-place="bottom-start"
                className="d-btn primary xs">
                With Search Bar
              </button>

              <div id="dropdown-search" className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-search">
                    <input
                      type="text"
                      className="d-input-text sm w-60"
                      placeholder="Placeholder" />
                  </div>
                  <div className="d-dropdown-item">Dashboard</div>
                  <div className="d-dropdown-item">Settings</div>
                  <div className="d-dropdown-item">Earnings</div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">Sign out</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xl font-semibold">
            Dropdown With Footer Button
          </p>
          <div className="flex gap-3">
            <div className="">
              <button
                d-dropdown-toggle="dropdown-footer-btn"
                d-dropdown-trigger="click"
                d-dropdown-place="bottom-start"
                className="d-btn primary xs">
                With Footer Button
              </button>

              <div
                id="dropdown-footer-btn"
                className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-item">Dashboard</div>
                  <div className="d-dropdown-item">Settings</div>
                  <div className="d-dropdown-item">Earnings</div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">Sign out</div>
                  <div className="d-dropdown-footer">
                    <div
                      className="flex gap-2 justify-end w-52">
                      <button
                        className="d-btn primary-outline xs">
                        Button
                      </button>
                      <button className="d-btn primary xs">
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xl font-semibold">Dropdown Placement</p>
          <div className="flex gap-3 flex-wrap">
            <div className="">
              <button
                d-dropdown-toggle="dropdown-bottom"
                d-dropdown-trigger="click"
                d-dropdown-place="bottom"
                className="d-btn primary xs">
                Bottom
              </button>

              <div id="dropdown-bottom" className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-item">Dashboard</div>
                  <div className="d-dropdown-item">Settings</div>
                  <div className="d-dropdown-item">Earnings</div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">Sign out</div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                d-dropdown-toggle="dropdown-top"
                d-dropdown-trigger="click"
                d-dropdown-place="top"
                className="d-btn primary xs">
                Top
              </button>

              <div id="dropdown-top" className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-item">Dashboard</div>
                  <div className="d-dropdown-item">Settings</div>
                  <div className="d-dropdown-item">Earnings</div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">Sign out</div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                d-dropdown-toggle="dropdown-left"
                d-dropdown-trigger="click"
                d-dropdown-place="left"
                className="d-btn primary xs">
                Left
              </button>

              <div id="dropdown-left" className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-item">Dashboard</div>
                  <div className="d-dropdown-item">Settings</div>
                  <div className="d-dropdown-item">Earnings</div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">Sign out</div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                d-dropdown-toggle="dropdown-right"
                d-dropdown-trigger="click"
                d-dropdown-place="right"
                className="d-btn primary xs">
                Right
              </button>

              <div id="dropdown-right" className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-item">Dashboard</div>
                  <div className="d-dropdown-item">Settings</div>
                  <div className="d-dropdown-item">Earnings</div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">Sign out</div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                d-dropdown-toggle="dropdown-bottom-start"
                d-dropdown-trigger="click"
                d-dropdown-place="bottom-start"
                className="d-btn primary xs">
                Bottom Start
              </button>

              <div
                id="dropdown-bottom-start"
                className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-item">Dashboard</div>
                  <div className="d-dropdown-item">Settings</div>
                  <div className="d-dropdown-item">Earnings</div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">Sign out</div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                d-dropdown-toggle="dropdown-bottom-end"
                d-dropdown-trigger="click"
                d-dropdown-place="bottom-end"
                className="d-btn primary xs">
                Bottom End
              </button>

              <div
                id="dropdown-bottom-end"
                className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-item">Dashboard</div>
                  <div className="d-dropdown-item">Settings</div>
                  <div className="d-dropdown-item">Earnings</div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">Sign out</div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                d-dropdown-toggle="dropdown-top-start"
                d-dropdown-trigger="click"
                d-dropdown-place="top-start"
                className="d-btn primary xs">
                Top Start
              </button>

              <div
                id="dropdown-top-start"
                className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-item">Dashboard</div>
                  <div className="d-dropdown-item">Settings</div>
                  <div className="d-dropdown-item">Earnings</div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">Sign out</div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                d-dropdown-toggle="dropdown-top-end"
                d-dropdown-trigger="click"
                d-dropdown-place="top-end"
                className="d-btn primary xs">
                Top End
              </button>

              <div
                id="dropdown-top-end"
                className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-item">Dashboard</div>
                  <div className="d-dropdown-item">Settings</div>
                  <div className="d-dropdown-item">Earnings</div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">Sign out</div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                d-dropdown-toggle="dropdown-left-start"
                d-dropdown-trigger="click"
                d-dropdown-place="left-start"
                className="d-btn primary xs">
                Left Start
              </button>

              <div
                id="dropdown-left-start"
                className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-item">Dashboard</div>
                  <div className="d-dropdown-item">Settings</div>
                  <div className="d-dropdown-item">Earnings</div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">Sign out</div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                d-dropdown-toggle="dropdown-left-end"
                d-dropdown-trigger="click"
                d-dropdown-place="left-end"
                className="d-btn primary xs">
                Left End
              </button>

              <div
                id="dropdown-left-end"
                className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-item">Dashboard</div>
                  <div className="d-dropdown-item">Settings</div>
                  <div className="d-dropdown-item">Earnings</div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">Sign out</div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                d-dropdown-toggle="dropdown-right-start"
                d-dropdown-trigger="click"
                d-dropdown-place="right-start"
                className="d-btn primary xs">
                Right Start
              </button>

              <div
                id="dropdown-right-start"
                className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-item">Dashboard</div>
                  <div className="d-dropdown-item">Settings</div>
                  <div className="d-dropdown-item">Earnings</div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">Sign out</div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                d-dropdown-toggle="dropdown-right-end"
                d-dropdown-trigger="click"
                d-dropdown-place="right-end"
                className="d-btn primary xs">
                Right End
              </button>

              <div
                id="dropdown-right-end"
                className="d-dropdown hidden">
                <div className="d-dropdown-item-container">
                  <div className="d-dropdown-item">Dashboard</div>
                  <div className="d-dropdown-item">Settings</div>
                  <div className="d-dropdown-item">Earnings</div>
                  <div className="d-divider sm"></div>
                  <div className="d-dropdown-item">Sign out</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown