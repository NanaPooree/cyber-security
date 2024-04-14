import Navbar from "../../Navbar/navbar";
import React from "react";
import img from "../auth/logo.png";
import room205 from "../่imgroom/205.png";
import { DatePicker, Space } from "antd";
import  Footerr  from "./footer";
import { Footer } from "antd/es/layout/layout";

const { RangePicker } = DatePicker;

export const statusroom = {
  empty: "ว่าง",
  busy: "ไม่ว่าง",
};

const Home = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <header>
        <br />
        <a href="#">
        <img
          src={img}
          alt="Logo"
          className="items-center text-center justify-center"
        />
        </a>
        <br />
      </header>
      <Navbar />
      <br />
      <div className="content-center flex  flex-row h-18 w-full mt-2 text-center ">
        <h1 className="shadow-lg font-kanit px-6 py-4 text-center bg-orange-500 w-full rounded-full text-4xl font-bold  mb-4 dark:text-white ">
          ระบบจองห้องเรียนของภาควิชาคอมพิวเตอร์ศึกษา
        </h1>
      </div>
      <div className="flex flex-row h-96 mt-2">
        <div className="transition-transform transform hover:scale-105 rounded-xl shadow-lg px-6 py-4 w-1/5 dark:text-green-700 text-2xl font-bold text-center ">
          <h2 className="font-kanit bg-orange-500 rounded-xl text-white font-xl">
            52-205
          </h2>
          <img
            src={room205}
            alt="room205"
            className="rounded-xl h-auto w-full mt-2"
          />
          <p className="font-kanit bg-red-500 mt-2 rounded-full text-white font-xl">
            {statusroom.busy}
          </p>
          <button
            className="font-kanit mt-2 w-full bg-sky-500 text-white rounded-full px-4 py-2 hover:bg-sky-600 focus:outline-none focus:shadow-outline-purple active:bg-sky-300
          "
            type="button"
            onClick={() => setShowModal(true)}
          >
            จองห้อง
          </button>
        </div>
        <div className="font-kanit transition-transform transform hover:scale-105 rounded-xl shadow-lg px-6 py-4 w-1/5 dark:text-green-700 text-2xl font-bold text-center ">
          <h2 className="bg-orange-500 rounded-xl text-white font-xl">
            52-211
          </h2>
          <img
            src={room205}
            alt="room205"
            className="rounded-xl h-auto w-full mt-2"
          />
          <p className="bg-red-500 mt-2 rounded-full text-white font-xl">
            {statusroom.busy}
          </p>
          <button
            className="mt-2 w-full bg-sky-500 text-white rounded-full px-4 py-2 hover:bg-sky-600 focus:outline-none focus:shadow-outline-purple active:bg-sky-300"
            type="button"
            onClick={() => setShowModal(true)}
          >
            จองห้อง
          </button>
        </div>
        <div className="font-kanit transition-transform transform hover:scale-105 rounded-xl shadow-lg px-6 py-4 w-1/5 dark:text-green-700 text-2xl font-bold text-center ">
          <h2 className="bg-orange-500 rounded-xl text-white font-xl">
            52-213
          </h2>
          <img
            src={room205}
            alt="room205"
            className="rounded-xl h-auto w-full mt-2"
          />
          <p className="bg-green-500 mt-2 rounded-full text-white font-xl">
            {statusroom.empty}
          </p>
          <button
            className="mt-2 w-full bg-sky-500 text-white rounded-full px-4 py-2 hover:bg-sky-600 focus:outline-none focus:shadow-outline-purple active:bg-sky-300"
            type="button"
            onClick={() => setShowModal(true)}
          >
            จองห้อง
          </button>
        </div>
        <div className="font-kanit transition-transform transform hover:scale-105 rounded-xl shadow-lg px-6 py-4 w-1/5 dark:text-green-700 text-2xl font-bold text-center ">
          <h2 className="bg-orange-500 rounded-xl text-white font-xl">
            52-512
          </h2>
          <img
            src={room205}
            alt="room205"
            className="rounded-xl h-auto w-full mt-2"
          />
          <p className="bg-green-500 mt-2 rounded-full text-white font-xl">
            {statusroom.empty}
          </p>
          <button
            className="mt-2 w-full bg-sky-500 text-white rounded-full px-4 py-2 hover:bg-sky-600 focus:outline-none focus:shadow-outline-purple active:bg-sky-300"
            type="button"
            onClick={() => setShowModal(true)}
          >
            จองห้อง
          </button>
        </div>
        <div className="font-kanit transition-transform transform hover:scale-105 rounded-xl shadow-lg px-6 py-4 w-1/5 dark:text-green-700 text-2xl font-bold text-center ">
          <h2 className="bg-orange-500 rounded-xl text-white font-xl">
            52-701
          </h2>
          <img
            src={room205}
            alt="room205"
            className="rounded-xl h-auto w-full mt-2"
          />
          <p className="bg-red-500 mt-2 rounded-full text-white font-xl">
            {statusroom.busy}
          </p>
          <button
            className="mt-2 w-full bg-sky-500 text-white rounded-full px-4 py-2 hover:bg-sky-600 focus:outline-none focus:shadow-outline-purple active:bg-sky-300"
            type="button"
            onClick={() => setShowModal(true)}
          >
            จองห้อง
          </button>
        </div>
      </div>

      <div className="font-kanit flex flex-row h-96 mt-2">
        <div className="font-kanit transition-transform transform hover:scale-105 rounded-xl shadow-lg px-6 py-4 w-1/5 dark:text-green-700 text-2xl font-bold text-center ">
          <h2 className="bg-orange-500 rounded-xl text-white font-xl">
            52-702
          </h2>
          <img
            src={room205}
            alt="room205"
            className="rounded-xl h-auto w-full mt-2"
          />
          <p className="bg-red-500 mt-2 rounded-full text-white font-xl">
            {statusroom.busy}
          </p>
          <button
            className="mt-2 w-full bg-sky-500 text-white rounded-full px-4 py-2 hover:bg-sky-600 focus:outline-none focus:shadow-outline-purple active:bg-sky-300"
            type="button"
            onClick={() => setShowModal(true)}
          >
            จองห้อง
          </button>
        </div>
        <div className="transition-transform transform hover:scale-105 rounded-xl shadow-lg px-6 py-4 w-1/5 dark:text-green-700 text-2xl font-bold text-center ">
          <h2 className="bg-orange-500 rounded-xl text-white font-xl">
            44-702
          </h2>
          <img
            src={room205}
            alt="room205"
            className="rounded-xl h-auto w-full mt-2"
          />
          <p className="bg-red-500 mt-2 rounded-full text-white font-xl">
            {statusroom.busy}
          </p>
          <button
            className="mt-2 w-full bg-sky-500 text-white rounded-full px-4 py-2 hover:bg-sky-600 focus:outline-none focus:shadow-outline-purple active:bg-sky-300"
            type="button"
            onClick={() => setShowModal(true)}
          >
            จองห้อง
          </button>
        </div>
        <div className="transition-transform transform hover:scale-105 rounded-xl shadow-lg px-6 py-4 w-1/5 dark:text-green-700 text-2xl font-bold text-center ">
          <h2 className="bg-orange-500 rounded-xl text-white font-xl">
            44-703
          </h2>
          <img
            src={room205}
            alt="room205"
            className="rounded-xl h-auto w-full mt-2"
          />
          <p className="bg-green-500 mt-2 rounded-full text-white font-xl">
            {statusroom.empty}
          </p>
          <button
            className="mt-2 w-full bg-sky-500 text-white rounded-full px-4 py-2 hover:bg-sky-600 focus:outline-none focus:shadow-outline-purple active:bg-sky-300"
            type="button"
            onClick={() => setShowModal(true)}
          >
            จองห้อง
          </button>
        </div>
        <div className="transition-transform transform hover:scale-105 rounded-xl shadow-lg px-6 py-4 w-1/5 dark:text-green-700 text-2xl font-bold text-center ">
          <h2 className="bg-orange-500 rounded-xl text-white font-xl">
            44-708
          </h2>
          <img
            src={room205}
            alt="room205"
            className="rounded-xl h-auto w-full mt-2"
          />
          <p className="bg-green-500 mt-2 rounded-full text-white font-xl">
            {statusroom.empty}
          </p>
          <button
            className="mt-2 w-full bg-sky-500 text-white rounded-full px-4 py-2 hover:bg-sky-600 focus:outline-none focus:shadow-outline-purple active:bg-sky-300"
            type="button"
            onClick={() => setShowModal(true)}
          >
            จองห้อง
          </button>
        </div>
        <div className="transition-transform transform hover:scale-105 rounded-xl shadow-lg px-6 py-4 w-1/5 dark:text-green-700 text-2xl font-bold text-center ">
          <h2 className="bg-orange-500 rounded-xl text-white font-xl">
            44-709
          </h2>
          <img
            src={room205}
            alt="room205"
            className="rounded-xl h-auto w-full mt-2"
          />
          <p className="bg-green-500 mt-2 rounded-full text-white font-xl">
            {statusroom.empty}
          </p>
          <button
            className="mt-2 w-full bg-sky-500 text-white rounded-full px-4 py-2 hover:bg-sky-600 focus:outline-none focus:shadow-outline-purple active:bg-sky-300"
            type="button"
            onClick={() => setShowModal(true)}
          >
            จองห้อง
          </button>
        </div>
      </div>
     <Footer className="item-center justify-items-center">
      <Footerr/>
     </Footer>
      {/*Modal*/}
      {showModal ? (
        <>
          <div className=" font-kanit justify-center  w-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold  text-green-700">จองห้องเรียน</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-ml font-medium  text-green-700"
                    >
                      ชื่อ
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-white
                         dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Your Name"
                      required
                    />
                    <label
                      htmlFor="name"
                      className="block mb-2 mt-3 text-ml font-medium  text-green-700"
                    >
                      Section
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-white
                         dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Section"
                      required
                    />

                    <p className="block mb-2 mt-3 text-ml font-medium  text-green-700">
                      เลือกวันที่ต้องการจองห้องเรียน
                    </p>
                    <DatePicker
                      renderExtraFooter={() => "เลือกวันที่ต้องการจองห้องเรียน"}
                    />

                    <p className="block mb-2 mt-3 text-ml font-medium  text-green-700">
                      เลือกเวลาที่ต้องการจองห้องเรียน
                    </p>
                    <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                      <label className="">
                        <input
                          type="radio"
                          name="type"
                          value="Time"
                          className="peer sr-only"
                        />
                        <p
                          className="peer-checked:bg-black justify-items-center peer-checked:text-white rounded-lg border
             border-black px-6 py-2 font-bold"
                        >
                          08:00
                        </p>
                      </label>
                      <label className="">
                        <input
                          type="radio"
                          name="type"
                          value="Time"
                          className="peer sr-only"
                        />
                        <p
                          className="peer-checked:bg-black peer-checked:text-white rounded-lg border
             border-black px-6 py-2 font-bold"
                        >
                          09:00
                        </p>
                      </label>

                      <label className="">
                        <input
                          type="radio"
                          name="type"
                          value="Time"
                          className="peer sr-only"
                        />
                        <p
                          className="peer-checked:bg-black peer-checked:text-white rounded-lg border
             border-black px-6 py-2 font-bold"
                        >
                          10:00
                        </p>
                      </label>

                      <label className="">
                        <input
                          type="radio"
                          name="type"
                          value="Time"
                          className="peer sr-only"
                        />
                        <p
                          className="peer-checked:bg-black peer-checked:text-white rounded-lg border
             border-black px-6 py-2 font-bold"
                        >
                          11:00
                        </p>
                      </label>

                      <label className="">
                        <input
                          type="radio"
                          name="type"
                          value="Time"
                          className="peer sr-only"
                        />
                        <p
                          className="peer-checked:bg-black peer-checked:text-white rounded-lg border
             border-black px-6 py-2 font-bold"
                        >
                          12:00
                        </p>
                      </label>

                      <label className="">
                        <input
                          type="radio"
                          name="type"
                          value="Time"
                          className="peer sr-only"
                        />
                        <p
                          className="peer-checked:bg-black peer-checked:text-white rounded-lg border
             border-black px-6 py-2 font-bold"
                        >
                          13:00
                        </p>
                      </label>

                      <label className="">
                        <input
                          type="radio"
                          name="type"
                          value="Time"
                          className="peer sr-only"
                        />
                        <p
                          className="peer-checked:bg-black peer-checked:text-white rounded-lg border
             border-black px-6 py-2 font-bold"
                        >
                          14:00
                        </p>
                      </label>

                      <label className="">
                        <input
                          type="radio"
                          name="type"
                          value="Time"
                          className="peer sr-only"
                        />
                        <p
                          className="peer-checked:bg-black peer-checked:text-white rounded-lg border
             border-black px-6 py-2 font-bold"
                        >
                          15:00
                        </p>
                      </label>

                      <label className="">
                        <input
                          type="radio"
                          name="type"
                          value="Time"
                          className="peer sr-only"
                        />
                        <p
                          className="peer-checked:bg-black peer-checked:text-white rounded-lg border
             border-black px-6 py-2 font-bold"
                        >
                          16:00
                        </p>
                      </label>

                      <label className="">
                        <input
                          type="radio"
                          name="type"
                          value="Time"
                          className="peer sr-only"
                        />
                        <p
                          className="peer-checked:bg-black peer-checked:text-white rounded-lg border
             border-black px-6 py-2 font-bold"
                        >
                          17:00
                        </p>
                      </label>

                      <label className="">
                        <input
                          type="radio"
                          name="type"
                          value="Time"
                          className="peer sr-only"
                        />
                        <p
                          className="peer-checked:bg-black peer-checked:text-white rounded-lg border
             border-black px-6 py-2 font-bold"
                        >
                          18:00
                        </p>
                      </label>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    ปิด
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    บันทึกการจอง
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
     
    </div>
  );
};
export default Home;
