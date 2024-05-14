import Examples from "@/components/Examples";
import Routes from "@/components/Routes";
import Sidebar from "@/components/Sidebar";
import Starter from "@/components/Starter";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { headers } from "next/headers";

export default function Home() {
  const origin = process.env.BASE_URL
  return (
    <main className="bg-gray-100 dark:bg-gray-900">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-10">
          <Starter />
          <Routes />
          <Examples origin={origin || ''} />
        </div>
        <div className="hidden md:block md:col-span-2">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
