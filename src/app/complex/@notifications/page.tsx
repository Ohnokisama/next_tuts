import Link from "next/link"

const Notifications = () => {
  return (
    <>
      <h2 className="text-2xl font-bold">
        Notifications
      </h2>
      <Link href={'/complex/archived'}>Archived</Link>
    </>
  )
}

export default Notifications