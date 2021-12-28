import "../../tailwindcss/style.css";
import { ToastContainer } from "react-toastify";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "react-toastify/dist/ReactToastify.css";

NProgress.configure({}); // showSpinner: false
Router.events.on("routerChangeStart", () => NProgress.start());
Router.events.on("routerChangeComplete", () => NProgress.done());
Router.events.on("routerChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer position="top-center"></ToastContainer>
    </>
  );
}

export default MyApp;
