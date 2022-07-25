import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const Main = (props) => (
  <div className="bg-slate-50">
    <Head>
      <title>{props.title}</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Head>
    <Navbar data={props.data} />
    <div className="pt-16">
      <main>{props.children}</main>
      <aside></aside>
    </div>
    <Footer />
  </div>
);

export default Main;
