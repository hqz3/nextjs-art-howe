import "./globals.css";
import "react-image-gallery/styles/css/image-gallery.css";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SearchBar />
        {children}
      </body>
    </html>
  );
}
