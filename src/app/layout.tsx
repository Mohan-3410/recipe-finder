import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";
const inter = Inter({ subsets: ["latin"] });
import { Providers as ThemeProvider } from "./themePovider";
import {QueryProvider as QueryClientProvider} from "./queryClientProvider"
import Notifier from "@/components/notifier";
import Navbar from "@/components/home/navbar";


export const metadata: Metadata = {
  title: "RecipeFinder",
  description:
    "Recipe Finder is your ultimate online platform to search, discover, and save delicious recipes from around the world. Whether you're looking for appetizers, main courses, or desserts, Recipe Finder has got you covered. Our user-friendly interface and powerful search functionality make it easy to find recipes by ingredient or dish name. Explore various categories, view detailed recipe instructions, and create a personalized collection of your favorite recipes. Join Recipe Finder today and turn your culinary dreams into reality!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* <Navbar/> */}
          <Notifier />
          <ThemeProvider>
            <QueryClientProvider >
              {children}
            </QueryClientProvider>
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
