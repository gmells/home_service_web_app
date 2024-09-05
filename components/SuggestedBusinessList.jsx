import GlobalApi from "@/app/services/GlobalApi";
import { Button } from "@/components/ui/button";
import { NotebookPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BookingSection from "@/components/BookingSection";

const SuggestedBusinessList = ({ business }) => {
  const [businessList, setBusinessList] = useState([]);

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(business?.category?.name).then((resp) => {
      setBusinessList(resp?.businessLists);
    });
  };

  useEffect(() => {
    if (business) {
      getBusinessList();
    }
  }, [business]);

  return (
    <div className="md:pl-10 ">
      <BookingSection business={business}>
        <Button className="flex gap-2 md:w-full min-w-[150px] ">
          <NotebookPen />
          Book Appointment
        </Button>
      </BookingSection>
      <div className=" hidden md:block">
        <h2 className="font-bold text-lg mt-3 mb-3">Similar Business</h2>
        <div className="">
          {businessList &&
            businessList.map((business, index) => (
              <Link
                href={`/details/` + business.id}
                key={index}
                className="flex gap-2 mb-4 hover:border border-primary rounded-lg p-2
                cursor-pointer hover:shadow-md "
              >
                <Image
                  src={business?.image[0].url}
                  alt={business.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover h-[100px]"
                />
                {/*oo*/}
                <div>
                  <h2 className="font-bold">{business.name}</h2>
                  <h2 className="text-primary">{business.contactPerson}</h2>
                  <h2 className="text-gray-400">{business.address}</h2>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestedBusinessList;
