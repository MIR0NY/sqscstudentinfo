import { ModeToggle } from "@/components/mode-toggle";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provieder";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "SQSC - Sonargaon Quality School and College",
  description: "Information of All Students of SQSC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar/>

          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
