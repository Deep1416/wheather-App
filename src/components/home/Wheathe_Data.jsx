import React, { useEffect, useState } from "react";

const Wheathe_Data = ({ data, setData, setDeleteCity, setAddCity ,addCity}) => {
  const [inputVal , setInputVal] = useState('');
  const [bgColor , setBgColor] = useState("");
  const handleDelete = (idx) => {
    const cityName = data[idx].city;

    const deletitem = data.filter((_, i) => i !== idx);

    setDeleteCity((prev) => [...prev, cityName]);

    setAddCity((prev) => prev.filter((name) => name !== cityName));

    setData(deletitem);
  };

  const handleChangeDesc = ( value , idx) => {
    const newData = [...data];
    newData[idx].description = value;
    setData(newData);
  };

  const handleSearchCityName =() =>{
    const index = data.findIndex(detail => detail.city.toLowerCase() === inputVal.toLowerCase());
    if (index !== -1) {
      setBgColor(index);
      setTimeout(() => {
        setBgColor(null);
      }, 3000);
    }
  }

  return (
    <>
      <div className="p-3">
        <div className=" text-right ">
          <input
            type="text"
            placeholder="City Name"
            className=" rounded-l border border-black outline-none px-6 py-2 "
            onChange={(e)=>setInputVal(e.target.value)}
            value={inputVal}
          />
          <button className="text-white border border-[#4472C4] rounded-r bg-[#4472C4] px-6 py-2" onClick={handleSearchCityName} >
            search
          </button>
        </div>
        <div>
          <table className="w-full mt-4  ">
            <thead>
              <tr className=" bg-[#4472C4] text-left text-white">
                <th className=" py-2  border border-black p-2">City</th>
                <th className=" border border-black p-2 ">Description</th>
                <th className=" border border-black p-2">Temperature(C)</th>
                <th className=" border border-black p-2">Pressure(hPa)</th>
                <th className=" border border-black p-2">Data age(hrs)</th>
                <th className=" border border-black p-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {addCity.length > 0 ? (
                data.map((cityData, index) => (
                  <tr key={index} className={bgColor === index ? 'bg-yellow-500' : ''}>
                    <td className=" border border-black p-1">
                      {cityData.city}
                    </td>
                    <td className=" border border-black p-1">
                      <input
                        type="text"
                        onChange={(e) => handleChangeDesc( e.target.value , index)}
                        value={cityData.description}
                        className=" border border-black p-1 rounded-md"
                      />
                    </td>
                    <td className=" border border-black p-1">
                      {cityData.temp_in_celsius}
                    </td>
                    <td className=" border border-black p-1">
                      {cityData.pressure_in_hPa}
                    </td>
                    <td className=" border border-black p-1">
                    {Math.round(((new Date() - new Date(cityData.date_and_time)) / (1000 * 60 * 60)) * 100) / 100}
                    </td>
                    <td className=" border border-black p-1">
                      <button onClick={() => handleDelete(index)} className="text-[#4472C4] underline">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : null}
            </tbody>
          </table>
          {data.length === 0 && <div className='text-center w-full'><h1 className='mt-20 font-bold text-2xl'>No Data</h1></div>}
        </div>
      </div>
    </>
  );
};

export default Wheathe_Data;
