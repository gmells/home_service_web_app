"use client";
import { getCategory } from "@/app/services/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategorySidebar = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const params = usePathname();

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    params && setSelectedCategory(params.split("/")[2]);
  }, [params]);

  // Used to get all Category List

  const getCategoryList = () => {
    getCategory().then((resp) => {
      console.log(resp);
      setCategoryList(resp.categories);
    });
  };

  return (
    <div>
      <h2 className="font-bold mb-3 text-lg text-primary">Categories</h2>
      <div>
        {categoryList.map((category, index) => (
          <Link
            href={"/search/" + category.name}
            key={index}
            className={`flex gap-2 p-3 border rounded-lg md:mr-10 mb-3 cursor-pointer items-center
             hover:bg-purple-50 hover:text-primary hover:border-primary
             ${
               selectedCategory == category.name &&
               "border-primary text-primary shadow-md bg-purple-50"
             }`}
          >
            <Image src={category.icon.url} alt="icon" width={30} height={30} />
            <h2>{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
