import { Link, useSearchParams } from "react-router-dom";
import { useBlogGet } from "../../../components/hooks/useBlogGet";
import Loading from "../../../components/Loading";
import BlogDetails from "./BlogDetails";
import {  FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { useBlogDeleteById } from "../../../components/hooks/useBlogDelete";
import { useEffect, useState } from "react";
import { useBlogUpdateById } from "../../../components/hooks/useUpdateBlogById";
import BlogEditModal from "../../../components/BlogModal";
import { useBlogCreate } from "../../../components/hooks/useCreateBlog";
import BlogCreateModal from "../../../components/BlogCreateModal";

const Blog = () => {
  const { data, loading, error,refetch } = useBlogGet();
  const {success:deleteSuccess,loading: deleteLoading, sendRequest: deleteBlog } = useBlogDeleteById();
  const {success:updateSuccess,loading: updateLoading, sendRequest: updateBlog } = useBlogUpdateById();
  const {success:createSuccess,loading: createLoading, sendRequest: createBlog } = useBlogCreate();
   const [modalOpen, setModalOpen] = useState(false);
   const [modalOpen2, setModalOpen2] = useState(false);
    const [updblog, setupdBlog] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const blog = searchParams.get("blog") || null;

  const updatePage = (id?: string | null) => {
    if (id) {
      // set blog param
      searchParams.set("blog", id);
    } else {
      // remove blog param
      searchParams.delete("blog");
    }
    setSearchParams(searchParams);
  };

   const handleUpdate = (updatedBlog:any) => {
    console.log("Updated Blog:", updatedBlog.id);
    setupdBlog(updatedBlog);
    updateBlog(updatedBlog.id,updatedBlog); // Call the update hook with the blog ID
    // Here you can also call your PUT hook to update the blog
  };
   const handleCreate = (updatedBlog:any) => {
    console.log("created Blog:", updatedBlog);
    createBlog(updatedBlog); // Call the update hook with the blog ID
  };

 useEffect(() => {
  if (deleteSuccess || updateSuccess || createSuccess) {
    refetch();
  }
}, [deleteSuccess, updateSuccess, createSuccess]);


  return (
    <div className="w-full ">
      {loading && <Loading />}
      {error && (
        <p className="text-red-500  text-3xl text-center font-semibold my-10 ">
          {" "}
          {error}{" "}
        </p>
      )}
      {/* blogs */}
     
      {blog === null && (
        <>
          {/* header */}

          {data && (
            <div className="h-[100px] mb-5 flexCenter gap-2 bg-gray-200 w-full flexCol ">
              <h2 className="text-center font-bold text-3xl text-black ">
                {" "}
                Our Blog{" "}
              </h2>
              <i className="">Home / Blog</i>
            </div>
          )}
          {/* create blog */}
           <div className="flexCenter my-3 ">
        <button
          onClick={() => setModalOpen2(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
        >
          Create Blog
        </button>
      </div>

          <div className="grid grid-cols-1 items-center px-4 md:px-0 mt-[50px] gap-4 w-full md:max-w-[70%] mx-auto lg:grid-cols-3 md:grid-cols-2  ">
            {data &&
              data.map((each: any) => (
                <div
                  key={each.id}
                  className="shadow-xl w-full rounded p-1 pb-4 mx-auto group relative "
                >
                  <img
                    className="w-full h-[250px] rounded "
                    loading="lazy"
                    src={each.avatar}
                    alt={each.name}
                  />
                  <div className="px-2 mt-3  ">
                    <h3 className="font-bold text-2xl "> {each.name} </h3>
                    <p className="font-normal mt-2 text-base text-left w-full  h-[90px] ">
                      {" "}
                      {String(each.content).slice(0, 100)}{" "}
                    </p>
                  </div>
                  <Link
                    className="px-4 hover:underline "
                    to={`/e-commerce/blog?blog=${each.id}`}
                  >
                    Read More
                  </Link>
                  {/* actions */}
                  <div className="absolute bottom-0 w-full group-hover:flexCenter  gap-4 hidden ">
                    {
                        deleteLoading?
                        <i className="animate-spin  text-green-800  "> | </i>
                        :
                   <FaTrash
                      className="text-red-500 cursor-pointer"
                      onClick={() => deleteBlog(each.id)}
                      title="Delete Blog"
                    />
                    }
                    {
                        updateLoading?
                        <i className="animate-spin  text-green-800  "> | </i>
                        :
                   
                     <FaEdit
                      className="text-blue-500 cursor-pointer"
                      onClick={() => {setModalOpen(true); setupdBlog(each)}}
                      title="Edit Blog"
                    />
                    }
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
      {/* blog details */}
      {blog !== null && <BlogDetails blogId={blog} updatePage={updatePage} />}
       <BlogEditModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        blog={updblog}
        onSubmit={handleUpdate}
        updateLoading={updateLoading}
        success={updateSuccess}
      />
       <BlogCreateModal
        isOpen={modalOpen2}
        onClose={() => setModalOpen2(false)}
        onSubmit={handleCreate}
        createLoading={createLoading}
        success={createSuccess}
      />
    </div>
  );
};

export default Blog;
