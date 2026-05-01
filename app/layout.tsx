import "@/app/globals.css";
import { ReactNode } from "react";
import { Epilogue, Plus_Jakarta_Sans } from "next/font/google";

const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-epilogue" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata = {
  title: "Pita Calimero - Snack Halal Malmedy",
  description: "Découvrez notre carte, nos Pitas, Lahmacun et spécialités turques au coeur de Malmedy.",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fr" className={`scroll-smooth ${epilogue.variable} ${jakarta.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
