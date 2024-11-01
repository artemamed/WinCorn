"use client";
import { posts } from "@/.velite";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { FaRegClock } from "react-icons/fa"; // Import clock icon
export default function BlogPage() {
  return (
    <div className="px-5 lg:px-36 pt-10 pb-10">
      <div className="h-[35vh] md:h-[30vh] flex flex-col gap-3 justify-center items-center text-center bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg p-6">
        <h2 className="font-bold text-5xl">Our Blogs</h2>
        <h1 className="font-semibold text-xl">
          Read our latest blogs and learn more about our services
        </h1>
      </div>
      <Fade cascade delay={180}>
        <div className="mb-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {posts.map((post) => {
            const date = new Date(post.date);
            const formattedDate = `${date.getFullYear()}-${(
              "0" + (date.getMonth() + 1)
            ).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
            return (
              <article
                key={post.title}
                className="overflow-hidden transition-shadow hover:shadow-xl border border-gray-200 rounded-lg bg-white"
              >
                {post.coverImage && (
                  <Image
                    className="w-full h-48 object-cover rounded-t-lg"
                    src={post.coverImage.src}
                    alt={post.title}
                    width={post.coverImage.width}
                    height={post.coverImage.height}
                    blurDataURL={post.coverImage.blurDataURL}
                    placeholder="blur"
                  />
                )}
                <div className="p-4">
                  <time
                    dateTime={formattedDate}
                    className="flex items-center text-xs text-gray-500 mb-2"
                  >
                    <FaRegClock className="mr-1" />
                    {formattedDate}
                  </time>
                  <Link href={`${post.slug}`}>
                    <h3 className="mt-0.5 text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                    {post.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Fade>
    </div>
  );
}