'use client'
import { fetchLoggedUser } from "@/lib/Fetcher/User";
import { Badge } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { MdMailOutline } from "react-icons/md";

const InfoButton = () => {
  const {
    data: User,
  } = useQuery({
    queryKey: ["User"],
    queryFn: fetchLoggedUser,
  });
  if (User) {
    return (
      <>
        <Link href={"/info"} className=" hover:text-gray-500">
          <Badge color="danger">
            <MdMailOutline className="w-7 h-7" />
          </Badge>
        </Link>
      </>
    );
  }
};

export default InfoButton;
