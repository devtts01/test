import "./loading.scss";

export default function Loading() {
  return (
    <div className="loading-container">
      <svg>
        <circle cx={30} cy={30} r="30"></circle>
        <circle cx={30} cy={30} r="30"></circle>
      </svg>
    </div>
  );
}
