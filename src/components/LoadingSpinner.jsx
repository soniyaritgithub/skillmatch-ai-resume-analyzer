const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

      <div
        className="
          w-full
          max-w-sm
          rounded-3xl
          bg-white
          p-8
          shadow-2xl
          flex
          flex-col
          items-center
          text-center
        "
      >
        {/* Spinner */}
        <div
          className="
            w-16
            h-16
            border-[6px]
            border-blue-200
            border-t-blue-600
            rounded-full
            animate-spin
          "
        ></div>

        {/* Title */}
        <h2
          className="
            mt-6
            font-bold
            text-gray-800
            text-xl
            sm:text-2xl
            md:text-3xl
          "
        >
          Analyzing Resume
        </h2>

        {/* Description */}
        <p
          className="
            mt-3
            text-gray-500
            leading-relaxed
            text-sm
            sm:text-base
            md:text-lg
          "
        >
          Please wait while our AI analyzes your resume and prepares your ATS
          report.
        </p>

        {/* Loading Dots */}
        <div className="flex gap-2 mt-6">
          <span className="w-3 h-3 rounded-full bg-blue-600 animate-bounce"></span>

          <span
            className="w-3 h-3 rounded-full bg-blue-600 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>

          <span
            className="w-3 h-3 rounded-full bg-blue-600 animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></span>
        </div>
      </div>

    </div>
  );
};

export default LoadingSpinner;