const Breadcrumb = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <p>Arrow</p>
        <ol className="d-breadcrumb bordered">
          <li>
            <a href="#">
              Home
            </a>
            <svg className="separator" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </li>
          <li>
            <a href="#">
              Class
              <svg className="separator" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a>
          </li>
          <li className="active">
            Webinar
          </li>
        </ol>
      </div>
      <div className="flex flex-col gap-3">
        <p>Slashes</p>
        <ol className="d-breadcrumb bordered">
          <li>
            <a href="#">
              Home
            </a>
            <svg className="separator" width="16" height="16" viewBox="0 0 16 16" fill="none"
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"></path>
            </svg>
          </li>
          <li>
            <a href="#">
              Class
              <svg className="separator" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"></path>
              </svg>
            </a>
          </li>
          <li className="active">
            Webinar
          </li>
        </ol>
      </div>
      <div className="flex flex-col gap-3">
        <p>Bordered Top and Bottom</p>
        <ol className="d-breadcrumb bordered-t bordered-b">
          <li>
            <a href="#">
              Home
            </a>
            <svg className="separator" width="16" height="16" viewBox="0 0 16 16" fill="none"
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"></path>
            </svg>
          </li>
          <li>
            <a href="#">
              Class
              <svg className="separator" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"></path>
              </svg>
            </a>
          </li>
          <li className="active">
            Webinar
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Breadcrumb