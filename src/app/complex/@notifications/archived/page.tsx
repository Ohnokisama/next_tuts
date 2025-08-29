import Link from "next/link"

const ArchivedNotifications = () => {
  return (
    <>
      <h2 className="text-2xl font-bold">
        Archived Notifications
      </h2>
      <Link href={'/complex'}>Notifications</Link>
    </>
  )
}

export default ArchivedNotifications