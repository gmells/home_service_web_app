"use client";
import GlobalApi from "@/app/services/GlobalApi";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import BusinessInfo from "../componentss/BusinessInfo";
import SuggestedBusinessList from "../componentss/SuggestedBusinessList";
import BusinessDescription from "../componentss/BusinessDescription";

const BusinessDetail = ({ params }) => {
  const { data, status } = useSession();
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    params && getBusinessById();
  }, [params]);

  useEffect(() => {
    checkUserAuth();
  }, []);

  const getBusinessById = () => {
    GlobalApi.getBusinessById(params.businessId).then((resp) => {
      setBusiness(resp.businessList);
    });
  };

  const checkUserAuth = () => {
    if (status == "loading") {
      return <p>Loading...</p>;
    }

    if (status == "unauthenticated") {
      signIn("descope");
    }
  };

  return (
    status == "authenticated" &&
    business && (
      <div className="py-8 md:py-20 px-10 md:px-36">
        <BusinessInfo business={business} />

        <div className="grid grid-cols-3 mt-16">
          <div className="col-span-3 md:col-span-2 order-last md:order-first">
            <BusinessDescription business={business} />
          </div>
          <div className="">
            <SuggestedBusinessList business={business} />
          </div>
        </div>
      </div>
    )
  );
};

export default BusinessDetail;
