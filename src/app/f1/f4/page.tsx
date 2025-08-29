import Link from "next/link"

const F4 = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">F4 page</h1>
      <Link href={'/f1/f3'}>F3</Link>
      <Link href={'/about'}>About</Link>
    </div>
  )
}

export default F4