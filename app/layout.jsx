import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Hawk Tours",
  description: "Travel to the thang!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.class}`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
