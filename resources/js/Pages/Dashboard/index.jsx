import Paginate from "@/Components/Paginate";
import Authenticated from "@/Layouts/Authenticated";
import { For, RenderIfFalse, RenderIfTrue } from "@/utils";
import { Head, Link } from "@inertiajs/inertia-react";
import axios from "axios";
import FeatherIcon from "feather-icons-react";
import { Fragment } from "react";
import Swal from "sweetalert2";

const Index = (props) => {
  const deleteArticle = async (slug) => {
    if (confirm("Hapus Article ?"))
      await axios.delete(`/dashboard/articles/${slug}`);
  };

  const showAlertDelete = (slug) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) deleteArticle(slug);
    });
  };

  return (
    <Authenticated auth={props.auth} errors={props.errors} title="My Dashboard">
      <div className="py-6">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white text-slate-900 overflow-hidden shadow-lg shadow-slate-400 sm:rounded-md">
            <div className="p-6 lg:p-7">
              <div className="mb-5">
                <div className="flex justify-between w-full">
                  <h2 className="text-2xl md:text-3xl mb-3">Artikel Saya</h2>
                  <Link
                    className="btn bg-success hover:bg-success rounded btn-sm border-none outline-none flex capitalize items-center justify-center"
                    as="button"
                    href="/dashboard/articles/create"
                  >
                    <FeatherIcon icon="plus-circle" size={20} />
                    <span>&nbsp;Buat artikel&nbsp;</span>
                  </Link>
                </div>
                <hr className="border-t border-t-slate-300" />
              </div>
              <RenderIfTrue isTrue={props.flash.success}>
                <div className="mb-5" id="alert">
                  <div className="p-4 bg-green-400 rounded-md shadow-lg !flex !justify-between">
                    <div className="flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{props.flash.success}</span>
                    </div>
                    <Link as="button">
                      <FeatherIcon icon="x" />
                    </Link>
                  </div>
                </div>
              </RenderIfTrue>
              <div className="overflow-x-auto relative shadow-md shadow-slate-400 lg:rounded-md slide-element">
                <table className="w-full text-center text-sm">
                  <thead className="text-sm bg-danger text-slate-100 uppercase divide-x">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        No
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Judul Artikel
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Kategori Artikel
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300">
                    <RenderIfTrue isTrue={props.articles.data.length > 0}>
                      <For
                        each={props.articles.data}
                        render={(article, index) => (
                          <Fragment key={index}>
                            <tr
                              className={`text-sm ${
                                index % 2 === 0 ? "bg-gray-200" : "bg-gray-50"
                              }`}
                            >
                              <th className="py-4 px-6 font-medium whitespace-nowrap text-base text-center">
                                {index + 1}
                              </th>
                              <th className="py-4 px-6 text-left font-medium whitespace-nowrap text-base">
                                {article.title}
                              </th>
                              <td className="py-4 px-6 text-base">
                                Programming
                              </td>
                              <td className="py-4 px-6 flex gap-3 justify-center">
                                <Link
                                  href={`/dashboard/articles/${article.slug}`}
                                  method="get"
                                  className="btn bg-sky-400 text-dark hover:bg-sky-400 rounded btn-sm border-none outline-none"
                                >
                                  <FeatherIcon size={20} icon="eye" />
                                </Link>
                                <Link
                                  href={`/dashboard/articles/${article.slug}/edit`}
                                  method="get"
                                  className="btn bg-warning text-dark hover:bg-warning rounded btn-sm border-none outline-none"
                                >
                                  <FeatherIcon size={20} icon="edit" />
                                </Link>
                                <Link
                                  as="button"
                                  className="btn bg-danger hover:bg-danger rounded btn-sm border-none outline-none"
                                  onClick={() => deleteArticle(article.slug)}
                                >
                                  <FeatherIcon size={20} icon="trash-2" />
                                </Link>
                              </td>
                            </tr>
                          </Fragment>
                        )}
                      />
                    </RenderIfTrue>
                    <RenderIfFalse isFalse={props.articles.data.length > 0}>
                      <tr className="bg-slate-800 text-sm dark:border-gray-700">
                        <td
                          className="py-4 px-6 text-left font-medium whitespace-nowrap text-base"
                          colSpan={4}
                        >
                          <h1 className="text-xl text-center">
                            Kamu belum memiliki artikel :(
                          </h1>
                        </td>
                      </tr>
                    </RenderIfFalse>
                  </tbody>
                </table>
              </div>
              <RenderIfTrue isTrue={props.articles.data.length > 10}>
                <div className="mt-7 mb-2 w-full flex justify-center items-center">
                  <Paginate links={props.articles.links} color="bg-slate-800" />
                </div>
              </RenderIfTrue>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default Index;
