import "./globals.css";
import "react-image-gallery/styles/css/image-gallery.css";
import Nav from "./Nav";
import SearchBar from "./SearchBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <SearchBar />
        {children}
      </body>
    </html>
  );
}
