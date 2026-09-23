import "./globals.css";

export const metadata = {
  title: "Sree Kumaar — Full Stack Developer",
  description:
    "Portfolio of Sree Kumaar, a Full Stack Developer specialising in React.js, Next.js, Flutter, WordPress and Python.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
