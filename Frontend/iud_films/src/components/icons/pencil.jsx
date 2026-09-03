export function Pencil() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
    >
      <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round">
        <g strokeWidth="2">
          <path
            strokeDasharray="56"
            d="M3 21l2 -6l11 -11c1 -1 3 -1 4 0c1 1 1 3 0 4l-11 11l-6 2"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.6s"
              values="56;0"
            />
          </path>
          <path strokeDasharray="8" strokeDashoffset="8" d="M15 5l4 4">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.6s"
              dur="0.2s"
              to="0"
            />
          </path>
        </g>
        <path strokeDasharray="8" strokeDashoffset="8" d="M6 15l3 3">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.8s"
            dur="0.2s"
            to="0"
          />
        </path>
      </g>
    </svg>
  );
}
