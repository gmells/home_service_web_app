"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./components/Hero";
import CategoryList from "./components/CategoryList";
import GlobalApi from "./services/GlobalApi";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp);
    });
  };
  return (
    <div>
      <Hero />

      <CategoryList />
    </div>
  );
}
