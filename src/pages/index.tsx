import Image from "next/image";
import { Inter } from "next/font/google";
import Fetch from "@/configs/axiosConfig";

const inter = Inter({ subsets: ["latin"] });

const sendRequest = async () => {
  await Fetch.post("/me", {
    name: "soheil",
  });
};

export default function Home() {
  return (
    <button
      onClick={() => {
        Fetch.post("/me", {
          name: "soheil",
        });
      }}
    >
      click
    </button>
  );
}
