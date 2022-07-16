import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";
import axios from "axios";
import FeatherIcon from "feather-icons-react";

const Show = (props) => {
  const { article } = props;
  const back = () => window.history.back();

  return (
    <Authenticated auth={props.auth} errors={props.errors} title="My Dashboard">
      <div className="py-6">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white text-slate-900 overflow-hidden shadow-lg shadow-slate-400 sm:rounded-md">
            <div className="p-6 lg:p-7">
              <div className="mb-5">
                <div className="flex justify-between w-full">
                  <h2 className="text-2xl md:text-3xl mb-3">Detail Artikel</h2>
                  <Link
                    className="btn btn-secondary rounded btn-sm border-none outline-none flex capitalize items-center justify-center"
                    as="button"
                    onClick={back}
                  >
                    <FeatherIcon icon="chevrons-left" size={20} />
                    <span>&nbsp;Kembali&nbsp;</span>
                  </Link>
                </div>
                <hr className="border-t border-t-slate-300" />
              </div>
              <div className="mb-5">
                <div className="w-full lg:max-w-3xl mx-auto p-2">
                  <div className="mb-7">
                    <h2 className="text-4xl md:text-5xl font-medium text-center">
                      {article.title}
                    </h2>
                  </div>
                  <div className="mb-7 rounded overflow-hidden">
                    <img
                      src="https://placeimg.com/400/225/arch"
                      width="100%"
                      alt="car!"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="mb-7 leading-loose">
                    <p
                      className="text-lg md:text-xl text-justify font-medium text-gray-900"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                      style={{ lineHeight: "2rem" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default Show;
