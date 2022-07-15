import Main from "@/Layouts/Main";
import { Link } from "@inertiajs/inertia-react";

const Article = (props) => {
  const { article, author } = props;
  const back = () => window.history.back();

  return (
    <Main data={props} title="Detail Article">
      <section className="pt-6 pb-10">
        <div className="container">
          <div className="w-full lg:max-w-4xl mx-auto p-2">
            <div className="mb-7">
              <h2 className="text-4xl md:text-5xl font-medium text-center">
                {article.title}
              </h2>
            </div>
            <div className="mb-7">
              <p className="text-lg md:text-xl font-medium text-center">
                Ditulis oleh <Link>{author.name}</Link>
              </p>
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
                className="text-base md:text-lg lg:text-xl"
                dangerouslySetInnerHTML={{ __html: article.content }}
                style={{ lineHeight: "2.2rem" }}
              />
            </div>
            <div className="mb-6">
              <Link as="button" onClick={back} className="underline text-lg">
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
