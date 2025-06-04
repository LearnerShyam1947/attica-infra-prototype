
const UploadProgressBar = ({ progress }) => {
  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
          .shimmer {
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.4) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
          }
        `}
      </style>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 overflow-hidden">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 relative overflow-hidden"
          style={{ width: `${progress || 0}%` }}
        >
          <div className="absolute inset-0 shimmer"></div>
        </div>
      </div>
    </>
  );
};

export default UploadProgressBar;