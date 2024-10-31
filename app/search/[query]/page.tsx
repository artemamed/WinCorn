import React from "react";
import SearchedProducts from "./SearchedProducts";

const Page = ({ params }: { params: { query: string } }) => {
  const query: string = params.query;
  const UpdatedQuery = query.replace(/%20/g, ' ')
  console.log(UpdatedQuery)
  return (
    <div className="px-5 py-5 bg-gray-300">
      <div className="flex justify-start items-center pb-5">
        <h1 className="font-semibold text-2xl md:text-4xl">&quot; Related Products &quot;</h1>
      </div>
      <div>
        <SearchedProducts query={UpdatedQuery} />
      </div>
    </div>
  );
};
export default Page;
