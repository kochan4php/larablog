import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";

const Main = (props) => (
  <>
    <Head title={props.title} />
    <Navbar data={props.data} />
    <main>{props.children}</main>
  </>
);

export default Main;
