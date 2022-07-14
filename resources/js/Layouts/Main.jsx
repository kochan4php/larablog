import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";

const Main = (props) => (
  <>
    <Head>
      <title>{props.title}</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Head>
    <Navbar data={props.data} />
    <main>{props.children}</main>
  </>
);

export default Main;
