import "./globals.css";
import "react-image-gallery/styles/css/image-gallery.css";
import Nav from "./Nav";
import SearchBar from "./SearchBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
      />
      <body>
        <Nav />
        <SearchBar />
        {children}
      </body>
    </html>
  );
}
