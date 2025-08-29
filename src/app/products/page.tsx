import Link from "next/link"

const Products = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Product List</h1>
      <ul className="my-2 list-disc list-inside">
        <li><Link href={'/products/1'}>Product 1</Link></li>
        <li><Link href={'/products/2'}>Product 2</Link></li>
        <li><Link href={'/products/3'} replace>Product 3</Link></li>
      </ul>
    </div>
  )
}

export default Products