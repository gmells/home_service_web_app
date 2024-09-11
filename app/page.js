"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "@/components/Hero";
import CategoryList from "@/components/CategoryList";
import { getCategory, getAllBusinessList } from "./services/GlobalApi";
import { useEffect, useState } from "react";
import BusinessList from "@/components/BusinessList";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);

  // Used to get all Category List

  useEffect(() => {
    const GetCategoryList = () => {
      getCategory().then((resp) => {
        setCategoryList(resp.categories);
      });
    };

    /*
     *Used to get all Business List
     */

    const GetAllBusinessList = () => {
      getAllBusinessList().then((resp) => {
        setBusinessList(resp.businessLists);
      });
    };
    GetCategoryList();
    GetAllBusinessList();
  }, []);

  return (
    <div>
      <Hero />

      <CategoryList categoryList={categoryList} />

      <BusinessList businessList={businessList} title={"Popular Business"} />
    </div>
  );
}
