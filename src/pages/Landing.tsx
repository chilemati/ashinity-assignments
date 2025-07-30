import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='flexCenter flex-col gap-3 min-h-[100vh] ' >
        <h1 className="text-3xl font-bold underline text-center text-purple-700">
            Welcome to the Landing Page
        </h1>
        <p className="text-center mt-4">Explore our features and offerings!</p>
        <Link to="/e-commerce" className="py-2 px-4 rounded-md shadow-lg border-1 border-gray-800 bg-stone-500 text-white ">View E-commerce?</Link>
    </div>
  )
}

export default Landing