import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: 'Blog',
  }
}

const Blog = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">
        Blog
      </h2>
    </div>
  )
}

export default Blog