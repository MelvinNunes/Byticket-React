import React from "react";

import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";
import { Card, CardBody } from "@windmill/react-ui";
import { CoinIcon, CalendarIcon, ClockIcon } from "../icons";

function Tickets() {
  return (
    <>
      <PageTitle>Todos</PageTitle>

      <Card className="mb-8 shadow-md">
        <CardBody>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:grid-cols-7 lg:grid-cols-9 p-1">
            <div className="bg-gray-200 text-center font-medium cursor-pointer hover:bg-gray-300 w-20 rounded p-1">
              <h1>Todos</h1>
            </div>
            <div className="bg-gray-200 text-center font-medium cursor-pointer hover:bg-gray-300 w-20 rounded p-1">
              <h1>On Stage</h1>
            </div>
            <div className="bg-gray-200 text-center font-medium cursor-pointer hover:bg-gray-300 w-20 rounded p-1">
              <h1>Música</h1>
            </div>
            <div className="bg-gray-200 text-center font-medium cursor-pointer hover:bg-gray-300 w-20 rounded p-1">
              <h1>Lifestyle</h1>
            </div>
            <div className="bg-gray-200 text-center font-medium cursor-pointer hover:bg-gray-300 w-20 rounded p-1">
              <h1>Festivais</h1>
            </div>
            <div className="bg-gray-200 text-center font-medium cursor-pointer hover:bg-gray-300 w-20 rounded p-1">
              <h1>Desporto</h1>
            </div>
            <div className="bg-gray-200 text-center font-medium cursor-pointer hover:bg-gray-300 w-20 rounded p-1">
              <h1>Viagem</h1>
            </div>
          </div>
        </CardBody>
      </Card>

      <SectionTitle>Eventos</SectionTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 justify-center">
        <div className="flex flex-col w-3/4 bg-white cursor-pointer rounded">
          <img
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            className="bg-cover rounded-t"
            alt="foto"
          />
          <div className="ml-3">
            <h1 className="my-2 font-medium">Show de tecnologia</h1>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4" />
              <span className="text-sm">25 de Junho 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4" />
              <span className="text-sm">18 horas</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <CoinIcon className="w-4" />
              <span className="text-sm">200.00MT</span>
            </div>
          </div>
        </div>
        {/* CAN DELETE */}
        <div className="flex flex-col w-3/4 cursor-pointer bg-white rounded">
          <img
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            className="bg-cover rounded-t"
            alt="foto"
          />
          <div className="ml-3">
            <h1 className="my-2 font-medium">Show de tecnologia</h1>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4" />
              <span className="text-sm">25 de Junho 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4" />
              <span className="text-sm">18 horas</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <CoinIcon className="w-4" />
              <span className="text-sm">200.00MT</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 bg-white rounded">
          <img
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            className="bg-cover rounded-t"
            alt="foto"
          />
          <div className="ml-3">
            <h1 className="my-2 font-medium">Show de tecnologia</h1>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4" />
              <span className="text-sm">25 de Junho 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4" />
              <span className="text-sm">18 horas</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <CoinIcon className="w-4" />
              <span className="text-sm">200.00MT</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 bg-white rounded">
          <img
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            className="bg-cover rounded-t"
            alt="foto"
          />
          <div className="ml-3">
            <h1 className="my-2 font-medium">Show de tecnologia</h1>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4" />
              <span className="text-sm">25 de Junho 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4" />
              <span className="text-sm">18 horas</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <CoinIcon className="w-4" />
              <span className="text-sm">200.00MT</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 bg-white rounded">
          <img
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            className="bg-cover rounded-t"
            alt="foto"
          />
          <div className="ml-3">
            <h1 className="my-2 font-medium">Show de tecnologia</h1>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4" />
              <span className="text-sm">25 de Junho 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4" />
              <span className="text-sm">18 horas</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <CoinIcon className="w-4" />
              <span className="text-sm">200.00MT</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 bg-white rounded">
          <img
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            className="bg-cover rounded-t"
            alt="foto"
          />
          <div className="ml-3">
            <h1 className="my-2 font-medium">Show de tecnologia</h1>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4" />
              <span className="text-sm">25 de Junho 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4" />
              <span className="text-sm">18 horas</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <CoinIcon className="w-4" />
              <span className="text-sm">200.00MT</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 bg-white rounded">
          <img
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            className="bg-cover rounded-t"
            alt="foto"
          />
          <div className="ml-3">
            <h1 className="my-2 font-medium">Show de tecnologia</h1>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4" />
              <span className="text-sm">25 de Junho 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4" />
              <span className="text-sm">18 horas</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <CoinIcon className="w-4" />
              <span className="text-sm">200.00MT</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 bg-white rounded">
          <img
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            className="bg-cover rounded-t"
            alt="foto"
          />
          <div className="ml-3">
            <h1 className="my-2 font-medium">Show de tecnologia</h1>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4" />
              <span className="text-sm">25 de Junho 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4" />
              <span className="text-sm">18 horas</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <CoinIcon className="w-4" />
              <span className="text-sm">200.00MT</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 bg-white rounded">
          <img
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            className="bg-cover rounded-t"
            alt="foto"
          />
          <div className="ml-3">
            <h1 className="my-2 font-medium">Show de tecnologia</h1>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4" />
              <span className="text-sm">25 de Junho 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4" />
              <span className="text-sm">18 horas</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <CoinIcon className="w-4" />
              <span className="text-sm">200.00MT</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 bg-white rounded">
          <img
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            className="bg-cover rounded-t"
            alt="foto"
          />
          <div className="ml-3">
            <h1 className="my-2 font-medium">Show de tecnologia</h1>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4" />
              <span className="text-sm">25 de Junho 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4" />
              <span className="text-sm">18 horas</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <CoinIcon className="w-4" />
              <span className="text-sm">200.00MT</span>
            </div>
          </div>
        </div>
        {/* CAN DELETE */}
      </div>
    </>
  );
}

export default Tickets;
