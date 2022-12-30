import styles from "../styles/layoutStyles.module.css";
import Nav from "./Nav";
import Header from "./Header";
import Meta from "./Meta";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};
export default Layout;
