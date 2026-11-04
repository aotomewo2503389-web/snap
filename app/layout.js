import "./globals.css";

export const metadata = {
  title: "Lumo: Every candidate, understood.",
  description:
    "Lumo interviews job candidates by voice and scores them against your company values and the job description. A person makes every decision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
