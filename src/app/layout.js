export const metadata = {
  title: "Next.js with bee-queue",
  description: "Minimal project to display failure when using bee-queue and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
