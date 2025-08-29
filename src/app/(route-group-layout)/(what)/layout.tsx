const WhatLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="p-4 bg-purple-300">
      <h2 className="text-2xl font-bold">What layout</h2>
      { children }
    </div>
  )
}

export default WhatLayout