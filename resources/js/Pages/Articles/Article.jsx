import Button from "@/Components/Button";
import Main from "@/Layouts/Main";
import { For, RenderIfFalse, RenderIfTrue } from "@/utils";
import { Link } from "@inertiajs/inertia-react";
import moment from "moment";

const Article = (props) => {
  const { article, comments, users } = props;
  console.log(props);
  const back = () => window.history.back();

  return (
    <Main data={props} title="Detail Article">
      <section className="pt-6 pb-10">
        <div className="container">
          <div className="w-full lg:max-w-3xl mx-auto p-2">
            <div className="mb-10">
              <Link
                as="button"
                onClick={back}
                replace
                className="btn btn-sm bg-danger hover:bg-red-700 capitalize rounded border-none outline-none text-lg"
              >
                &laquo; Back
              </Link>
            </div>
            <article>
              <div className="mb-7">
                <h2 className="text-4xl md:text-5xl font-medium text-center">
                  {article.title}
                </h2>
              </div>
              <div className="mb-7">
                <p className="text-lg md:text-xl font-medium text-center">
                  Ditulis oleh <Link>{article.user.name}</Link>
                </p>
              </div>
              <div className="mb-7 rounded overflow-hidden">
                <img
                  src={
                    article.image
                      ? `/storage/${article.image}`
                      : "https://placeimg.com/400/225/arch"
                  }
                  width="100%"
                  alt="car!"
                  className="object-cover object-center"
                />
              </div>
              <div className="mb-12 leading-loose">
                <p
                  className="text-lg md:text-xl text-justify font-medium text-gray-900"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                  style={{ lineHeight: "1.8rem" }}
                />
              </div>
              <div className="my-7">
                <hr className="border-t border-t-slate-300" />
              </div>
              <section>
                <div className="mb-7">
                  <h1 className="text-2xl md:text-3xl font-semibold">
                    Komentar
                  </h1>
                </div>
                <RenderIfTrue isTrue={comments.length > 0}>
                  <For
                    each={comments}
                    render={(data, index) => {
                      const user = users.find(
                        (user) => user.id === data.user_id
                      );
                      return (
                        <section key={index}>
                          <div className="mb-7 bg-white rounded-md p-4 shadow-md shadow-slate-400 flex flex-col gap-3">
                            <p className="text-lg md:text-xl font-medium">
                              {user.name}
                            </p>
                            <p className="text-base md:text-lg font-medium">
                              {data.comment}
                            </p>
                            <p className="text-sm mt-4 font-medium" key={index}>
                              {moment(data.created_at).format("LL")}
                            </p>
                          </div>
                        </section>
                      );
                    }}
                  />
                </RenderIfTrue>
                <RenderIfFalse isFalse={comments.length > 0}>
                  <div>
                    <p className="text-lg md:text-xl font-medium">
                      Belum ada komentar.
                    </p>
                  </div>
                </RenderIfFalse>
              </section>
              <div className="my-7">
                <hr className="border-t border-t-slate-300" />
              </div>
              <section>
                <div className="mb-7">
                  <h1 className="text-2xl md:text-3xl font-semibold">
                    Tambahkan Komentar
                  </h1>
                </div>
                <RenderIfTrue isTrue={props.auth.user}>
                  <div className="mb-7">
                    <form className="flex flex-col gap-4">
                      <textarea
                        rows="3"
                        className="outline-none px-3 py-1.5 rounded-sm text-base !font-lexend ring-2 focus:ring-4 focus:ring-opacity-50 focus:ring-sky-500 transition-all selection:bg-rose-700 selection:text-rose-300 border-0 !bg-slate-50 !text-slate-900"
                        placeholder="Tuliskan komentarmu disini"
                      ></textarea>
                      <Button
                        type="submit"
                        className="w-1/2 md:w-1/4 flex justify-center"
                      >
                        Tambah komentar
                      </Button>
                    </form>
                  </div>
                </RenderIfTrue>
                <RenderIfFalse isFalse={props.auth.user}>
                  <div className="mb-7">
                    <div className="text-lg flex gap-4">
                      <p>
                        Mau berkomentar? silahkan{" "}
                        <Link
                          className="underline text-blue-600"
                          href={route("login")}
                        >
                          Login
                        </Link>{" "}
                        dulu
                      </p>
                    </div>
                  </div>
                </RenderIfFalse>
              </section>
            </article>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Article;
