import { useGetProducts } from '../../components/hooks/useGetProducts';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';

const Shop = () => {
  const { data: products, loading, error } = useGetProducts();
  return (
     <div>
      {
        loading && <Loading />
      }
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map(product => (
        <div className='shadow-lg rounded-md flexCenter flex-col gap-1 py-2 ' key={product.id}>
          <Link className='w-full' to={`/e-commerce/shop/${product?.id}`}>
           <img loading='lazy'src={product?.images[0]} alt={product?.title}  className='w-full h-[200px] rounded-md object-cover  ' /> 
            </Link>
          <h3 className='text-center' >{product?.title}</h3>

          <p className='text-[12px] italic text-center ' >{String(product.description).slice(0,100)}...</p>
          <p className='text-slate-950 font-bold' >${product?.price}</p>
        </div>
      ))}
      </div>
      <p className='w-full flexCenter text-red-700 font-bold' >  {error}</p>

    </div>
  )
}

export default Shop