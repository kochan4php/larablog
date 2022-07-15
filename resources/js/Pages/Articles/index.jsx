import Card from "@/Components/Card";
import Paginate from "@/Components/Paginate";
import Main from "@/Layouts/Main";
import { For } from "@/utils";
import { Link } from "@inertiajs/inertia-react";
import { Fragment } from "react";

const Index = (props) => {
  const { articles, authors } = props;
  const authorForFirstArticle = authors.find(
    (author) => author.id === articles?.data[0]?.user_id
  );

  return (
    <Main title="Home" data={props}>
      <section className="pt-6 pb-10">
        <div className="container">
          <div className="mb-8 mt-1 lg:px-1">
            <h2 className="text-3xl font-medium">All Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            <div
              className="card md:card-side shadow-lg md:col-span-2 rounded-md bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: "url(https://placeimg.com/400/225/arch)",
              }}
            >
              <div className="bg-slate-100 w-full">
                <figure>
                  <img
                    src="https://placeimg.com/400/925/arch"
                    alt="car!"
                    width="100%"
                    className="object-cover max-h-[430px]"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl mb-2">
                    {articles?.data[0]?.title}
                  </h2>
                  <div className="badge badge-primary !font-lexend text-base mb-2">
                    Oleh {authorForFirstArticle.name}
                  </div>
                  <p className="text-lg">{articles?.data[0]?.excerpt}</p>
                  <div className="card-actions justify-start mt-4">
                    <Link
                      href={`/articles/${articles?.data[0]?.slug}`}
                      className="btn btn-primary btn-sm rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <For
              each={articles?.data?.slice(1)}
              render={(data, index) => (
                <Fragment key={index}>
                  <Card article={data} authors={authors} />
                </Fragment>
              )}
            />
          </div>
          <div className="mt-9 mb-6 w-full flex justify-center items-center">
            <Paginate links={articles.links} />
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
