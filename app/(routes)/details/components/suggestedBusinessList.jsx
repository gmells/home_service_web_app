import GlobalApi from "@/app/services/GlobalApi";
import { Button } from "@/components/ui/button";
import { NotebookPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SuggestedBusinessList = ({ business }) => {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    business && getBusinessList();
  }, [business]);

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(business?.category?.name).then((resp) => {
      setBusinessList(resp?.businessLists);
    });
  };

  return (
    <div className="md:pl-10 ">
      <Button className="flex gap-2 md:w-full min-w-[150px] ">
        <NotebookPen />
        Book Appointment
      </Button>
      <div className=" hidden md:block">
        <h2 className="font-bold text-lg mt-3 mb-3">Similar Business</h2>
        <div className="">
          {businessList &&
            businessList.map((business, index) => (
              <Link
                href={`/details/` + business.id}
                key={index}
                className="flex gap-2 mb-4 hover:border border-primary rounded-lg p-2
                curpr-pointer shadow-md border-primary"
              >
                <Image
                  src={business?.image[0].url}
                  alt={business.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover h-[100px]"
                />
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
