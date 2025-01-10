import React, {ReactNode} from "react";
import Head from "next/head";
import styles from "./Layout.module.css"; // Custom CSS or CSS modules
import {useSelector} from "react-redux"; // Redux
import {RootState} from "@/state/store"; // Import RootState type
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import {useRouter} from "next/router";
import Button from "../Button/Button";
// import {useTheme} from "@/context/theme/ThemeContext";

interface LayoutProps {
  children: ReactNode; // Accepts any valid JSX elements as children
  title?: string; // Optional title for the page
}

// Layout component
const Layout: React.FC<LayoutProps> = ({children, title = "My App"}) => {
  const router = useRouter();
  const {theme} = useSelector((state: RootState) => state.theme);
  // const {theme} = useTheme();

  return (
    <div className={theme === "dark" ? styles.darkTheme : styles.lightTheme}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A dynamic web app with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className={styles.header}>
        <h1>{title}</h1>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <ThemeToggle />
        <Button onClick={() => router.back()} text={"Back"} />
      </footer>
      <div className={styles.footerT}>
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Layout;
