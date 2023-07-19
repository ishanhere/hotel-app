import Router from "next/router";

const Hotel = ({ hotel }) => {
  return (
    <div
      className="hotelCard"
      onClick={() => {
        typeof window !== "undefined" &&
          sessionStorage.setItem("hotel", JSON.stringify(hotel));
        Router.push({
          pathname: "/hoteldetail/[id]",
          query: { id: hotel.id },
        });
      }}
    >
      <img className="images" src={hotel?.image} />
      <div className="hotelCard_title">{hotel?.name}</div>
      <div className="hotelCard_price">{hotel?.price}</div>
      <div className="hotelCard_free">
        {hotel?.freeBreakfast ? "Free breakfast" : ""}
      </div>
    </div>
  );
};
export default Hotel;
