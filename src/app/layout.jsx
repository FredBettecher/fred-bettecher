import "./globals.css";
import { Roboto_Mono, Fira_Code, Ubuntu_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["400", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-firacode",
  weight: ["400", "700"],
});

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  variable: "--font-ubuntu-mono",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Fred Bettecher",
  description: "Meu portfólio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${robotoMono.variable} ${firaCode.variable} ${ubuntuMono.variable} antialiased bg-gradient-to-b from-charade-200 to-charade-950 text-charade-50`}
      >
        <div
        className="w-screen h-screen absolute top-0 left-0 z-0"
        style={{
          backgroundImage: "url('/nnnoise.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        ></div>
        {children}
      </body>
    </html>
  );
}
