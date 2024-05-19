import React from "react";

const City = ({ handleData, city ,addCity }) => {
  return (
    <div className="my-4">
      <div className="flex justify-center items-center flex-col md:gap-6 gap-2">
        <button
          className="px-8 text-lg py-3 font-medium rounded-md text-white bg-[#4472C4]"
          onClick={handleData}
        >
          Get Weather
        </button>
        <table className=" text-start flex justify-center flex-col  items-center  ">
          <tr>
            {" "}
            <th className="p-2 text-start border border-black h-10 w-[161px] bg-[#4472C4] text-white">
              City
            </th>
          </tr>
          {city.map((e, i) => {
            return (
              <>
                <tr className="">
                  <td className={`p-2 h-10 border-2 w-40 ${addCity.includes(e) ? "border-green-600" : "border-black"}`}>{e}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default City;
