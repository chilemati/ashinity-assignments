import { Link, useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';
import { FaArrowLeft } from 'react-icons/fa';
import { useGetUserById } from '../../../components/hooks/useGetUserById';

const ViewClothBySlug = () => {
  const { slug } = useParams();
  const { data: product, loading, error } = useGetUserById(String(slug).split("_")[1] ?? '');

  return (
    <div className="p-4">
      {loading && <Loading />}
      
      {error && <p className="text-red-700 font-bold text-center">{error}</p>}
        <div className="">
          <Link to="/e-commerce/clothes" className="text-blue-600 hover:underline mb-4 inline-block"> <FaArrowLeft className='font-bold text-[22px]' /> </Link>
        </div>
      {product && (
        <div className="shadow-lg rounded-md flexCenter flex-col gap-3 max-w-[700px] mx-auto p-4">
          <Link to={`/e-commerce/shop/${product?.id}`} className="w-full">
            <img
              loading="lazy"
              src={product?.avatar || ''}
              alt={product?.name}
              className="w-[250px] h-[250px] rounded-md object-cover mx-auto "
            />
           
          </Link>
          <p className="text-[16px]  text-start">
            Name: {String(product?.name)}
          </p>
          <p className="text-[16px]  text-start">
            Name: {String(product?.email)}
          </p>
         
        </div>
      )}
    </div>
  );
};

export default ViewClothBySlug;



