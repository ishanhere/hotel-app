import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import HotelDetails from "../../components/hotelDetails";
import { useSearchParams } from "next/navigation";

export default function HotelDetail(query) {
  // const searchParams = useSearchParams();
  // console.log("there", );
  // searchParams.get("id");
  return (
    <>
      <HotelDetails />
    </>
  );
}
