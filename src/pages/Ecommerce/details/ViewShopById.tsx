import { Link, useParams } from 'react-router-dom';
import { useGetProductById } from '../../../components/hooks/useGetProductById';
import Loading from '../../../components/Loading';
import { FaArrowLeft } from 'react-icons/fa';

const ViewShopById = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useGetProductById(id ?? '');

  return (
    <div className="p-4">
      {loading && <Loading />}
      
      {error && <p className="text-red-700 font-bold text-center">{error}</p>}
        <div className="">
          <Link to="/e-commerce/shop" className="text-blue-600 hover:underline mb-4 inline-block"> <FaArrowLeft className='font-bold text-[22px]' /> </Link>
        </div>
      {product && (
        <div className="shadow-lg rounded-md flexCenter flex-col gap-3 max-w-[700px] mx-auto p-4">
          <Link to={`/e-commerce/shop/${product?.id}`} className="w-full">
          <div className="grid grid-cols-3 gap-2 ">
            <img
              loading="lazy"
              src={product?.images?.[0] || ''}
              alt={product?.title}
              className="w-full h-[200px] rounded-md object-cover"
            />
            <img
              loading="lazy"
              src={product?.images?.[1] || ''}
              alt={product.title}
              className="w-full h-[200px] rounded-md object-cover"
            />
            <img
              loading="lazy"
              src={product?.images?.[2] || ''}
              alt={product?.title}
              className="w-full h-[200px] rounded-md object-cover"
            />

          </div>
          </Link>
          <h3 className="text-lg text-center gap-1 font-semibold">{product?.title} <br /> <p className='text-slate-950 font-bold' >${product?.price}</p> </h3>
          <p className="text-[16px]  text-center">
            {String(product?.description)}
          </p>
         
        </div>
      )}
    </div>
  );
};

export default ViewShopById;
