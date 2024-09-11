"use client";
import BusinessList from "@/components/BusinessList";
import { getBusinessByCategory } from "@/app/services/GlobalApi";
import React, { useEffect, useState } from "react";

const BusinessByCategory = ({ params }) => {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    console.log(params);
    if (params) {
      const getBusinessList = () => {
        getBusinessByCategory(params.category).then((resp) => {
          setBusinessList(resp?.businessLists);
        });
      };
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
