import Head from "next/head";
import Image from "next/image";
import HotelList from "../components/hotelList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <HotelList />
    </>
  );
}
