import Main from "@/Layouts/Main";
import { Link } from "@inertiajs/inertia-react";

const Article = (props) => {
  const { article } = props;
  const back = () => window.history.back();

  return (
    <Main data={props} title="Detail Article">
      <section className="pt-6 pb-10">
        <div className="container">
          <div className="w-full lg:max-w-3xl mx-auto p-2">
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
            <div className="mb-7 leading-loose">
              <p
                className="text-lg md:text-xl text-justify font-medium text-gray-900"
                dangerouslySetInnerHTML={{ __html: article.content }}
                style={{ lineHeight: "1.8rem" }}
              />
            </div>
            <div className="mb-6">
              <Link
                as="button"
                onClick={back}
                replace
                className="underline text-lg"
              >
                &laquo; Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Article;
