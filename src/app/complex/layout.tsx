import Card from "@/components/card";

export default function ComplexLayout({
  children,
  users,
  notifications,
  revenue,
  login
}: {
  children: React.ReactNode,
  users: React.ReactNode,
  notifications: React.ReactNode,
  revenue: React.ReactNode,
  login: React.ReactNode
}) {
  const isLoggedIn = true

  return isLoggedIn ? (
    <div className="h-screen w-full flex my-4 p-4">
      <div className="basis-1/4">
        <Card className="h-[50%] my-2">
          {users}
        </Card>
        <Card className="h-[50%] my-2">
          {revenue}
        </Card>
      </div>
      <div className="basis-2/4 p-8">
        { children }
      </div>
      <div className="basis-1/4">
        <Card className="h-full my-2">
          {notifications}
        </Card>
      </div>
    </div>
  ) : (
    login
  )
}
