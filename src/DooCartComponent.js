import React from "react";
import { Icon } from "@iconify/react";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Haircut",
      title: "เลือกพนักงานเอง",
      image: "/images/img_01.jpg",
      price: 660,
      quantity: 1,
    },
    {
      id: 2,
      name: "Hair color",
      title: "เลือกพนักงานเอง",
      image: "/images/img_02.jpg",
      price: 660,
      quantity: 1,
    },
  ];

  // Function to format date as "DD MMM YYYY"
  const formatDate = (date) => {
    const day = date.getDate();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="">
      {/* Navigation */}
      <div className="flex items-center pl-5 bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]  max-w-screen h-12">
        <div className="pt-1 ">
          <Icon
            icon="ic:round-arrow-back-ios"
            color="black"
            width="24"
            height="24"
          />
        </div>
        <h1 className="ml-2 text-xl font-semibold">ตะกร้า</h1>
      </div>

      {/* Main content */}
      <div className="pl-5 pr-5 pt-2 max-h-full max-w-full ">
        <h2 className=" text-2xl mt-5 font-bold">Never say cut</h2>
        <div className="flex items-center pt-2">
          <Icon icon="bxs:map" color="black" width="18" height="18" />
          <p className="pl-2 text-sm">6993 Meadow Valley Terrace, New York</p>
        </div>

        {/* Cart Items */}
        {cartItems.map((item, index) => (
          <div key={index}>
            <div className="flex mt-5">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-xl mr-4"
              />
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between mt-2">
                  <div className="flex flex-col">
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="text-gray-500 text-xs pt-1">{item.title}</p>
                  </div>
                  <p className="text-black font-medium text-sm flex-shrink-0 pr-0">
                    ฿{item.price}
                  </p>
                </div>

                <div className="flex items-center bg-gray-100 text-xs mt-2 pl-2 pr-2 max-w-fit h-6 rounded-xl">
                  <Icon
                    icon="solar:calendar-line-duotone"
                    color="black"
                    width="15"
                    height="15"
                  />
                  <p className="pl-1">{formatDate(new Date())}</p>
                  <p className="pl-2">{new Date().toLocaleTimeString()}</p>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <p className="text-orange-400 text-sm font-medium  mr-4">
                    แก้ไข
                  </p>
                  <div className="flex items-center">
                    <Icon
                      icon="zondicons:minus-outline"
                      color="gray"
                      size="18"
                      className="mr-2"
                    />
                    <p className="mx-2">{item.quantity}</p>
                    <Icon
                      icon="gala:add"
                      color="orange"
                      size="18"
                      className="ml-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* horizontal line after each item*/}
            {index < cartItems.length && <hr className="my-4" />}
          </div>
        ))}

        {/* Price Details */}
        <div className="my-5">
          <h2 className="font-bold text-xl ">รายละเอียดราคา</h2>
          <div className="flex justify-between">
            <p className="">ราคาสุทธิ</p>
            <p className="">฿325.00</p>
          </div>
          <div className="flex justify-between">
            <p className="">ภาษี (7%)</p>
            <p className="">฿22.75</p>
          </div>
          <div className="flex justify-between">
            <p className="">ค่าธรรมเนียม</p>
            <p className="">฿20</p>
          </div>
        </div>
      </div>
      {/* Payment Section */}

      <div className="rounded-t-3xl px-3 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] sticky bottom-0 bg-white ">
        <div className="mt-1 pt-2 px-2 flex flex-col items-center">
          <div className="flex justify-between w-full h-10">
            <p className="">ชำระมัดจำ (50%)</p>
            <p className="">฿ 300</p>
          </div>
          {/* the button */}
          <div className="mb-5 flex items-center justify-center ">
            <button className="bg-[#985d3f] w-80 h-16 text-white text-xl font-bold ml-5 mr-5 px-4 rounded-xl ">
              ชำระเงิน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
