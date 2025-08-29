"use client"
import { Metadata } from "next"
import { useRouter } from "next/navigation"

type ProductDetailsProps = {
  params: {
    productId: string
  }
}

// export const generateMetadata = ({params}: ProductDetailsProps): Metadata => {
//   return {
//     title: `Product ${params.productId} details`
//   }
// }

const ProductDetails = ({ params }: ProductDetailsProps) => {
  const router = useRouter()

  const handleClick = () => {
    console.log('Placing your order')
    router.push('/')
    // To replace the last page in the history stack
    // router.replace('/')
    // To go back to the last page
    // router.back()
    // To go to the next page
    // router.forward()
  }
  return (
    <div className="p-4">
      <h1 className="text-3xl font-medium">Details about product {params.productId}</h1>
      <button className="py-3 px-6 bg-cyan-500 rounded-xl mt-10" onClick={handleClick}>Order Product</button>
    </div>
  )
}

export default ProductDetails