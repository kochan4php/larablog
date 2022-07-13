import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/inertia-react";

const Welcome = (props) => {
    return (
        <>
            <Head title="Welcome" />
            <Navbar data={props} />
        </>
    );
};

export default Welcome;
