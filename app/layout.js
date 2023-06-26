import "./globals.css";
import { Roboto } from "next/font/google";
import Providers from "@/components/Providers";
import TopSideBar from "@/components/TopSideBar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Youtube",
  icons: {
    icon: "icons/youtube.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${roboto.variable} min-h-screen font-roboto relative dark:bg-[#0f0f0f]`}
        >
          <TopSideBar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
