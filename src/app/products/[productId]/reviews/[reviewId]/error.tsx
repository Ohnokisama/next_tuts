"use client"

const ErrorBoundary = ({ error, reset }: { error: Error, reset: () => void }) => {
  return (
    <div className="flex h-[200px] justify-center items-center bg-red-500 text-white">
      <div className="text-center">
        <h2 className="text-3xl mb-3">{error.message}</h2>
        <button className="bg-cyan-900 py-2 px-4 rounded-xl" onClick={reset}>Try again</button>
      </div>
    </div>
  )
}

export default ErrorBoundary