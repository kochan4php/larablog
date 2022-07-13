import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

const Header = () => (
  <h2 className="font-semibold text-xl leading-tight">My Posts</h2>
);

const Index = (props) => {
  return (
    <Authenticated auth={props.auth} errors={props.errors} header={<Header />}>
      <Head title="Dashboard" />
      <div className="py-6">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-slate-700 overflow-hidden shadow-lg shadow-slate-900 sm:rounded-lg">
            <div className="p-6">
              Selamat datang kembali {props.auth.user.name}
            </div>
            <div className="p-6">
              <h1>Tes hehe</h1>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default Index;
