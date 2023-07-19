const HotelDetails = () => {
  const hotelDetails = JSON.parse(
    typeof window !== "undefined" && window.sessionStorage.getItem("hotel")
  );
  return (
    <>
      <div className="hoteldetails">
        <button
          onClick={() => {
            const hotelList = JSON.parse(
              typeof window !== "undefined" &&
                window.sessionStorage.getItem("hotelList")
            );
            for (let i = 0; i < hotelList.length; i++) {
              if (hotelList[i].id == hotelDetails.id) {
                hotelDetails.favorite = true;
              }
            }
            typeof window !== "undefined" &&
              window.sessionStorage.setItem("hotelList",JSON.stringify( hotelList));
          }}
        >
          Add to Favouties
        </button>
        <img className="images" src={hotelDetails?.image} />
        <div className="discription">{hotelDetails?.description}</div>
        <div className="hotelCard_title">{hotelDetails?.name}</div>
        <div className="hotelCard_price">Price:{hotelDetails?.price}</div>
        <div className="hotelCard_free">
          {hotelDetails?.freeBreakfast ? "Free breakfast" : ""}
        </div>
      </div>
    </>
  );
};
export default HotelDetails;
