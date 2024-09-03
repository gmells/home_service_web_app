"use client";
import BusinessList from "@/app/components/BusinessList";
import GlobalApi from "@/app/services/GlobalApi";
import React, { useEffect, useState } from "react";

const BusinessByCategory = ({ params }) => {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    console.log(params);
    params && getBusinessList();
  }, [params]);

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(params.category).then((resp) => {
      setBusinessList(resp?.businessLists);
    });
  };

  return (
    <div>
      <BusinessList title={params.category} businessList={businessList} />
    </div>
  );
};

export default BusinessByCategory;
