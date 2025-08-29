import Link from "next/link"

const F1 = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">F1 page</h1>
      <Link href={'/f1/f2'}>F2</Link>
    </div>
  )
}

export default F1