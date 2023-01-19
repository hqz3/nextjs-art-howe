import "./globals.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { EB_Garamond } from "@next/font/google";
const ebGaramond = EB_Garamond({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ebGaramond.className}>
      <body>
        <Header />
        <SearchBar />
        {children}
      </body>
    </html>
  );
}
