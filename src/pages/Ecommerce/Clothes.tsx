import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import { useGetUsers } from '../../components/hooks/useGetUser';

const Clothes = () => {
  const { data: products, loading, error } = useGetUsers("users");
  return (
     <div>
      {
        loading && <Loading />
      }
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map(product => (
        <div className='shadow-lg rounded-md flexCenter flex-col gap-1 py-2 ' key={product?.id}>
          <Link className='w-full' to={`/e-commerce/clothe/${`details-of-user-${product?.name}_1`}`}>
           <img loading='lazy'src={product?.avatar} alt={product.name}  className='w-full h-[200px] rounded-md object-cover  ' /> 
            </Link>
          <h3 className='text-center' >{product?.name}</h3>

          <p className='text-[12px] italic text-center ' >{String(product?.email)}</p>
        </div>
      ))}
      </div>
      <p className='w-full flexCenter text-red-700 font-bold' >  {error}</p>

    </div>
  )
}

export default Clothes;