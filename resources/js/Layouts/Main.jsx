import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Container } from "@mantine/core";
import { Head } from "@inertiajs/inertia-react";

const Main = (props) => (
  <>
    <Head>
      <title>{props.title}</title>
    </Head>
    <Navbar data={props.data} />

    <div className="pt-16 container">
      <main>{props.children}</main>
      <aside></aside>
    </div>
    <Footer />
  </>
);

export default Main;
