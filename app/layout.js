import "./globals.css";
import { Roboto } from "next/font/google";
import Providers from "@/components/Providers";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Youtube",
  icons: {
    icon: "icons/colored/youtube.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${roboto.variable} min-h-screen font-roboto relative bg-[#0f0f0f]`}
        >
          <Topbar />
          <Sidebar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
