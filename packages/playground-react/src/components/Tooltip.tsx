const Tooltip: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">Tooltip</h1>
      </div>
      <div className="flex flex-col gap-3">
        <h3>Tooltip Right</h3>
        <div className="flex gap-6">
          <button
            d-tooltip-toggle="tooltip-left"
            d-tooltip-trigger="click"
            d-tooltip-place="right"
            className="d-btn primary xs">
            Click Here
          </button>
          <div className="d-tooltip light hidden" id="tooltip-left" >
            <div className="d-tip left"></div>
            Tooltip text here
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tooltip