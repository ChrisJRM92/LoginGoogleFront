import { Inter } from "next/font/google";
import "./styles.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test login google",
  description: "Create by ChristianJRM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
