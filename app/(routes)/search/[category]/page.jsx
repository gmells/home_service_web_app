"use client";
import BusinessList from "@/components/BusinessList";
import GlobalApi from "@/app/services/GlobalApi";
import React, { useEffect, useState } from "react";

const BusinessByCategory = ({ params }) => {
  const [businessList, setBusinessList] = useState([]);

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(params.category).then((resp) => {
      setBusinessList(resp?.businessLists);
    });
  };

  useEffect(() => {
    console.log(params);
    if (params) {
      getBusinessList();
    }
  }, [params]);

  return (
    <div>
      <BusinessList title={params.category} businessList={businessList} />
    </div>
  );
};

export default BusinessByCategory;
