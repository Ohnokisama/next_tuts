const Card = ({ children, className }: {children: React.ReactNode, className: string}) => {
  return (
    <div className={`p-8 bg-green-700 text-white rounded-xl ${className}`}>
      { children }
    </div>
  )
}

export default Card