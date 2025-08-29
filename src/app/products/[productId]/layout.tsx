const ProductDetailsLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Product Details</h2>
      { children }
      <h3 className="text-xl font-bold">Featured Products</h3>
    </div>
  )
}

export default ProductDetailsLayout