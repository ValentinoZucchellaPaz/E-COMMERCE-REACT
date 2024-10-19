const Cross = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.5 15.5-10-10zM15.5 5.5l-10 10" />
    </g>
  </svg>
)
export default Cross
