import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/inertia-react";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar data={props} />
        </>
    );
}
