import Card from "@/Components/Card";
import Paginate from "@/Components/Paginate";
import Main from "@/Layouts/Main";
import { For } from "@/utils";
import { Link } from "@inertiajs/inertia-react";
import { Fragment } from "react";
import { RenderIfTrue } from "@/utils";

const Index = (props) => {
  const { articles } = props;

  console.log(props);

  return (
    <Main title="Home" data={props}>
      <section className="pt-6 pb-10">
        <div className="container">
          <section className="mb-8 mt-1 lg:px-1">
            <h2 className="text-3xl md:text-4xl font-medium">All Articles</h2>
          </section>
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-6">
              <div
                className="card md:card-side shadow-lg shadow-slate-400 md:col-span-2 rounded-md bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage: "url(https://placeimg.com/400/225/arch)",
                }}
              >
                <div className="bg-slate-50 w-full">
                  <figure>
                    <img
                      src={
                        articles?.data[0]?.image
                          ? `/storage/${articles?.data[0]?.image}`
                          : articles?.data[0]?.image
                      }
                      alt="car!"
                      width="100%"
                      className="object-cover object-center max-h-[440px]"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-2xl mb-2">
                      {articles?.data[0]?.title}
                    </h2>
                    <div className="badge badge-primary py-2.5 !font-lexend text-sm mb-2">
                      Oleh {articles?.data[0]?.user?.name}
                    </div>
                    <p className="text-lg">{articles?.data[0]?.excerpt}</p>
                    <div className="card-actions flex items-center justify-between mt-4">
                      <Link
                        href={`/articles/${articles?.data[0]?.slug}`}
                        className="btn btn-primary btn-sm rounded"
                      >
                        Read More
                      </Link>
                      <div class="badge badge-secondary py-2.5 !font-lexend">
                        {articles?.data[0]?.category?.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <For
                each={articles?.data?.slice(1)}
                render={(data, index) => (
                  <Fragment key={index}>
                    <Card article={data} />
                  </Fragment>
                )}
              />
            </div>
          </section>
          <section className="mt-9 mb-6 w-full flex justify-center items-center">
            <Paginate links={articles.links} />
          </section>
        </div>
      </section>
    </Main>
  );
};

export default Index;
