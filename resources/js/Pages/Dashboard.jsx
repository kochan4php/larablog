import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

const Header = () => (
    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Dashboard
    </h2>
);

const Dashboard = (props) => {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<Header />}
        >
            <Head title="Dashboard" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white">
                            Selamat datang kembali {props.auth.user.name}
                        </div>
                        <div className="p-6 bg-white">
                            <h1>Tes hehe</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Dashboard;
