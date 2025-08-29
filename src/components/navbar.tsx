import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4 px-24 bg-amber-900 text-white">
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About</Link>
      <Link href={'/products'}>Products</Link>
      <Link href={'/services'}>Services</Link>
      <Link href={'/blog'}>Blog</Link>
      <Link href={'/contact'}>Contact</Link>
    </nav>
  )
}

export default Navbar