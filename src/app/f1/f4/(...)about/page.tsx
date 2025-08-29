export const metadata = {
  title: 'About Next.js',
  description: 'This is a Next.js tutorial'
}

const InterceptedAbout = () => {
  return (
    <h1 className="text-3xl font-bold">(...) Intercepted About Me</h1>
  )
}

export default InterceptedAbout