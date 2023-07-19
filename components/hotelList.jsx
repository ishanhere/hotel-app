import React, { useEffect, useState } from "react";
import Hotel from "./hotel";

const HotelList = () => {
  let [hotels, setHotels] = useState([]);
  let [hotelList, setHotelList] = useState([]);

  // let hotelList = [];
  const getHotelList = async () => {
    let updatedhotels = JSON.parse(
      typeof window !== "undefined" &&
        window.sessionStorage.getItem("hotelList")
    );
    if (updatedhotels && updatedhotels.length > 0) {
      setHotelList(updatedhotels);
      setHotels(updatedhotels);
    } else {
      try {
        let response = await fetch(
          "https://mocki.io/v1/4775a500-cf31-4bee-8a65-0c849b6e4d0c"
        );
        let hotels = await response.json();
        console.log(hotels);
        setHotelList(hotels);
        setHotels(hotels);
        typeof window !== "undefined" &&
          window.sessionStorage.setItem("hotelList", JSON.stringify(hotels));
        console.log("123", hotelList);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getFavHotels = (e) => {
    // let searchText = e.target.value;
    // if (!searchText) {
    //   console.log("1234", hotelList);
    //   setHotels(hotelList);

    //   return;
    // }
    let tempHotels = hotelList;
    setHotels(
      tempHotels.filter((hotel) => {
        return hotel.favorite == true;
      })
    );
  };

  const getSorted = () => {
    let tempHotels = hotelList;
    setHotels(
      tempHotels.sort((hotel, hotel1) => {
        return hotel.price - hotel1.price;
      })
    );
  };
  const getFilteredHotels = (e) => {
    let searchText = e.target.value;
    if (!searchText) {
      console.log("1234", hotelList);
      setHotels(hotelList);

      return;
    }
    let tempHotels = hotelList;
    setHotels(
      tempHotels.filter((hotel) => {
        return hotel.id == searchText || hotel.name.includes(searchText);
      })
    );
  };

  useEffect(() => {
    getHotelList();
  }, []);

  return (
    <div className="parent">
      <div className="hotelListContainer">
        <div>Hotels</div>
        <div>
          <input type="text" onChange={(e) => getFilteredHotels(e)} />{" "}
        </div>

        <div>
          <button onClick={() => getFavHotels()}>Favouties</button>
          <button onClick={() => getSorted()}>Sort</button>
        </div>
        <div>
          {hotels ? (
            hotels.length > 0 ? (
              hotels.map((hotel, index) => {
                return <Hotel hotel={hotel} key={index} />;
              })
            ) : (
              <>
                {" "}
                <div>No hotels found! </div>
              </>
            )
          ) : (
            <div>Loading... </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelList;
