import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

interface IParams {
  title: string;
}

interface IPost {
  title: string;
  summary: string;
  image: string;
  author: string;
}

export default async function BlogPost({ params  } : { params: IParams}) {
  // Fetch the blog post by title.
  const { title } = await params;

  const query : IPost = await client.fetch(`*[_type == "blog" && _id==$blum][0]` , {blum: title});


  // if (!post) {
  //   return <div>Post not found</div>;
  // }

  return (
    // <div className="w-full min-h-screen flex flex-col items-center bg-gray-100">
    //   <div className="w-[90%] max-w-4xl bg-white shadow-md p-5 rounded-md my-10">
    //   {post.image ? (
    //     <Image
    //       src={urlFor(post.image).url()}
    //       alt={post.title}
    //       width={800}
    //       height={400}
    //       className="w-full h-auto rounded-md"
    //     /> ) : (
    //       <div className="w-full h-[400px] flex items-center justify-center bg-gray-300 rounded-md">
    //         <p className="text-gray-700">No image available</p>
    //       </div>
    //     )}
    //     <h1 className="text-3xl font-bold mt-5">{post.title}</h1>
    //     <p className="text-gray-600 mt-2">By {post.author}</p>
    //   </div>
    // </div>
    <div>
    <h1>{query.summary}</h1>
    </div>
  );
}


