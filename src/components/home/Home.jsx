import React, { useEffect, useState } from "react";
import City from "./City";
import Wheathe_Data from "./Wheathe_Data";

const Home = () => {
  let city = ["Las Vegas", "London", "Los Angeles", "New York "];
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [deleteCity, setDeleteCity] = useState([]);
  const [addCity, setAddCity] = useState([]);

  const wheatherApi = async () => {
    if (deleteCity.length > 0) {
      const del = deleteCity.pop();
      const res = await fetch(
        `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${del}`
      );
      const parsed = await res.json();
      setData((prev) => [...prev, { ...parsed, city: `${del}` }]);
      setAddCity((prev) => [...prev, del]);
    } else if (city.length > count) {
      const res = await fetch(
        `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city[count]}`
      );
      const parsed = await res.json();
      setCount(count + 1);
      //   console.log(parsed);
      setData((prev) => [...prev, { ...parsed, city: `${city[count]}` }]);
      setAddCity((prev) => [...prev, `${city[count]}`]);
    }
  };

  const handleData = () => {
    wheatherApi();
  };
  return (
    <div className="w-full  border-4 border-black">
      <div className="flex h-[85vh] flex-wrap md:flex-nowrap ">
        <div className="md:w-[20%]  border-r-4 h-full border-black w-full">
          <City handleData={handleData} city={city} addCity = {addCity} />
        </div>
        <div className="w-[80%]">
          <Wheathe_Data
            data={data}
            city={city}
            setData={setData}
            setDeleteCity={setDeleteCity}
            setAddCity={setAddCity}
            addCity = {addCity}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
