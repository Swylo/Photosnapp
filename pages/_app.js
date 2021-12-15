import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InviteBackdrop from "../components/InviteBackdrop";
import { ActiveInviteProvider } from "../contexts/invite.context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ActiveInviteProvider>
        <Navbar />
        <InviteBackdrop />
        <Component {...pageProps} />
        <Footer />
      </ActiveInviteProvider>
    </>
  );
}

export default MyApp;
