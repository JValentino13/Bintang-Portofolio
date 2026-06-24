import { Geist, Geist_Mono, Poppins, Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeContext";
import Navbar from "@/components/navbar";
import PageTransition from "@/components/pageTransition";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://venzzy.vercel.app"),

  title: {
    default: "Venzzy.exe",
    template: "%s | Venzzy.exe",
  },

  description:
    "Venzzy.exe | Photografer personal website",

  keywords: [
    "venzzy",
    "website",
    "portfolio",
    "photografer",
    "photo service",
  ],

  authors: [
    {
      name: "Bintang",
      url: "https://venzzy.vercel.app",
    },
  ],

  creator: "Gabriel Bintang",
  publisher: "Venzzy.exe",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Venzzy.exe",
    description:
      "Venzzy.exe | Photografer personal website",
    url: "https://venzzy.vercel.app",
    siteName: "Venzzy.exe",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Venzzy.exe",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Venzzy.exe",
    description:
      "Venzzy.exe | Photografer personal website",
    images: ["/favicon.ico"],
  },

  alternates: {
    canonical: "https://venzzy.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${figtree.variable}`}
    >
      <head>
        <meta name="application-name" content="Venzzy.exe" />
      </head>
      <body className="min-h-full flex flex-col font-poppins select-none">
        <ThemeProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
