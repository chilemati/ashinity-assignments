import { useBlogGetById } from "../../../components/hooks/useBlogGetById";
import Loading from "../../../components/Loading";

interface p{
    blogId: string,
    updatePage: (id:string | null) => void 
}
const BlogDetails = ({blogId,updatePage}:p) => {
    const { data, loading, error } = useBlogGetById(blogId);
  return (
    <div className="w-full pb-5 " >
        {
            loading && <Loading />
        }
        {
            error && <p className="text-red-500  text-3xl text-center font-semibold my-10 "> {error} </p>
        }
        <div className="w-full px-4 md:max-w-[80%] mx-auto h-fit ">
            {
            data && [data].map((each:any,index:number)=>(
                <div key={index} className="w-full h-fit md:max-w-[70%] mx-auto mt-10 ">
                    <img className="w-full max-[300px] h-[400px] rounded " loading="lazy" src={each.avatar} alt={each.name} />
                    <h3 className="font-bold text-3xl mt-5 "> {each.name} </h3>
                    <p className="font-normal mt-2 text-base text-left w-full  h-fit "> {String(each.description)} </p>
                   
                </div>
            ))
        }
        </div>
        <div className="flexCenter mt-[50px]  ">
                     <button onClick={()=>updatePage(null)} className="px-4 py-2   bg-blue-500 text-white rounded mt-4">Back to Blogs</button>
                   </div>
        <p className='w-full flexCenter text-red-700 font-bold' >  {error} </p>
    </div>
  )
}

export default BlogDetails