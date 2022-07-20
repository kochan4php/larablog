import Main from "@/Layouts/Main";
import { For } from "@/utils";
import { Link } from "@inertiajs/inertia-react";
import moment from "moment";

const Article = (props) => {
  const { article } = props;
  const { comments } = article;
  console.log(comments);
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
              <div className="mb-7">
                <hr className="border-t border-t-slate-300" />
              </div>
              <section>
                <div className="mb-7">
                  <h1 className="text-3xl md:text-4xl font-semibold">
                    Komentar
                  </h1>
                </div>
                <For
                  each={comments}
                  render={(data, index) => (
                    <section key={index}>
                      <div className="p-1">
                        <p className="text-lg md:text-xl font-medium">
                          Deo Subarno
                        </p>
                      </div>
                      <div className="mb-7 bg-white rounded-md p-4 shadow-md shadow-slate-400">
                        <p className="text-base md:text-lg font-medium">
                          {data.comment}
                        </p>
                        <p className="text-sm mt-4 font-medium" key={index}>
                          {moment(data.created_at).fromNow()}
                        </p>
                      </div>
                    </section>
                  )}
                />
              </section>
            </article>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Article;
