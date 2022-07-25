import Button from "@/Components/Button";
import Main from "@/Layouts/Main";
import { For, RenderIfFalse, RenderIfTrue } from "@/utils";
import { Link, useForm } from "@inertiajs/inertia-react";
import FeatherIcon from "feather-icons-react";
import moment from "moment";

const Article = (props) => {
  const { article } = props;

  console.log(article);

  const { data, post, processing, setData } = useForm({
    article_id: article.id,
    user_id: props.auth.user ? props.auth.user.id : null,
    comment: "",
  });

  const back = () => window.history.back();

  const submitHandler = (e) => {
    e.preventDefault();
    post("/articles/comment", {
      preserveScroll: true,
    });
    setData("comment", "");
  };

  return (
    <Main data={props} title="Detail Article">
      <section className="pt-6 pb-10">
        <div className="container">
          <div className="w-full lg:max-w-3xl mx-auto p-2">
            <div className="mb-10">
              <Link
                as="button"
                onClick={back}
                className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-300"
                preserveScroll
              >
                <FeatherIcon icon="chevron-left" size={21} />
                <span className="text-lg !font-lexend ">
                  Kembali ke semua artikel
                </span>
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
                <div>
                  <img
                    src={
                      article.image !== ""
                        ? `/storage/${article.image}`
                        : "/storage/articles-image/default-article-image.png"
                    }
                    width="100%"
                    alt="car!"
                    className="object-cover object-center"
                  />
                </div>
                <RenderIfTrue isTrue={article.likes?.length > 0}>
                  <div className="bg-slate-200 p-3 text-base flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <form className="flex !items-center gap-2 mb-2">
                        <button className="btn btn-sm border-none outline-none rounded btn-primary">
                          <FeatherIcon icon="heart" />
                        </button>
                        <Link className="btn btn-sm rounded btn-secondary">
                          <FeatherIcon icon="message-circle" />
                        </Link>
                      </form>
                    </div>
                    <div className="text-base md:text-lg font-medium md:font-semibold">
                      Disukai oleh {article.likes[0]?.user.name}&nbsp;
                      {article.likes?.length > 1
                        ? `dan ${article.likes?.slice(1).length} lainnya`
                        : ""}
                    </div>
                  </div>
                </RenderIfTrue>
                <RenderIfFalse isFalse={article.likes?.length > 0}>
                  <div className="bg-slate-200 p-3 text-base rounded-b">
                    <div className="text-lg">{article.likes?.length} Likes</div>
                  </div>
                </RenderIfFalse>
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
                    Komentar&nbsp;
                    <span className="text-xl md:text-2xl">
                      ({article.comments.length})
                    </span>
                  </h1>
                </div>
                <RenderIfTrue isTrue={article.comments.length > 0}>
                  <For
                    each={article.comments}
                    render={(data, index) => (
                      <section key={index}>
                        <div className="mb-7 bg-white rounded-md p-4 shadow-md shadow-slate-400 flex flex-col gap-3">
                          <p className="text-lg md:text-xl font-medium">
                            {data.user.name}
                          </p>
                          <p className="text-base md:text-lg font-medium">
                            {data.comment}
                          </p>
                          <p className="text-sm mt-4 font-medium" key={index}>
                            {moment(data.created_at).calendar()}
                          </p>
                        </div>
                      </section>
                    )}
                  />
                </RenderIfTrue>
                <RenderIfFalse isFalse={article.comments.length > 0}>
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
                    <form
                      className="flex flex-col gap-4"
                      onSubmit={submitHandler}
                    >
                      <textarea
                        rows="3"
                        className="outline-none px-3 py-1.5 rounded-sm text-base !font-lexend ring-2 focus:ring-4 focus:ring-opacity-50 focus:ring-sky-500 transition-all selection:bg-rose-700 selection:text-rose-300 border-0 !bg-slate-50 !text-slate-900"
                        placeholder="Tuliskan komentarmu disini"
                        value={data.comment}
                        onChange={(e) => setData("comment", e.target.value)}
                      ></textarea>
                      <Button
                        type="submit"
                        className="w-full md:w-1/4 flex justify-center"
                        processing={processing}
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
