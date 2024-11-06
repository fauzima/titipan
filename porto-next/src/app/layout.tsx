import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Example",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="antialiased w-full min-h-screen m-0 flex flex-col">
        <Header />
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}

// {/* <div className="fixed inset-0 place-content-center">
// <div className="mx-auto w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-white rounded-full filter blur-[80px] md:blur-[120px] -z-50 "></div>
// </div>
// <div className="fixed brightness-200 inset-0 overflow-hidden -top-2/4 -left-2/4 -right-2/4 -bottom-2/4 w-[200%] h-[200vh] bg-[url('https://assets.iceable.com/img/noise-transparent.png')] bg-repeat animate-noise z-50 pointer-events-none"></div> */}
