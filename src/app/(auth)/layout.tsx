"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: 'Register', href:'/signup' },
  { name: 'Login', href:'/signin' },
  { name: 'Forgot Password', href:'/forgot-password' }
]

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const pathname = usePathname()

  return (
    <div>
      <div className="flex gap-2 py-3 px-6 bg-pink-600 text-white">
        {
          navLinks.map(link => {
            const isActive = pathname.includes(link.href)

            return(
              <Link href={link.href} key={link.name} className={ isActive ? "font-bold uppercase" : '' }>
                { link.name }
              </Link>
            ) 
          })
        }
      </div>
      { children }
    </div>
  )
}

export default AuthLayout