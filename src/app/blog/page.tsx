import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";


interface IPost {
  title: string;
  summary: string;
  image: string;
  author: string;
}
async function Blogs() {
  const query = `*[_type == 'blog']{
  title,
  summary,
  image,
  author
  }`;

  const posts:IPost[] = await client.fetch(query);
  console.log(posts);

  return (
    <div className="w-[100%] min-h-screen flex flex-col justify-center bg-[url(/main5.avif)]">
      <section>
        {posts.map((post) => (
           <div key={post.title} className="w-[90%] mx-auto grid grid-cols-1 my-5 md:grid-cols-3 gap-7">
                    <Link href={`/blog/${post.title}`}>
                      <div className="pb-4 m-1 rounded-md transition-all hover:scale-105 duration-200 shadow-xl border items-center">
                        <Image
                          src={urlFor(post.image).url()}
                          alt="img"
                          width={200}
                          height={200}
                          className="size-[350px] rounded-2xlcursor-pointer"
                        />
                        <div>
                          <h2 className="font-bold text-2xl px-3">{post.title}</h2>
                          <p className="text-md px-3 pt-1">{post.summary}</p>
                          {/* <p className="font-bold text-lg px-3 pt-3">{post.author}</p> */}
                            <Link href="" className="text-md px-3 pt-3 text-blue-600 hover:text-blue-800">Read More</Link>
                          
                          {/* {`/blog/${post.slug.current}`} */}
                        </div>
                      </div>
                    </Link>
                </div>
          // <div key={post.title}>
          //   <Link href="blog/title"><h2>{post.title}</h2></Link>
          //   <h3>{post.summary}</h3>
          //   <h4>{post.author}</h4>
          // </div>
        ))}
      </section>
    </div>
  );
}

export default Blogs;



