import Card from "@/Components/Card";
import Main from "@/Layouts/Main";
import { For } from "@/utils";
import { Fragment } from "react";

const Index = (props) => {
  return (
    <Main title="Home" data={props}>
      <section className="pt-6 pb-10">
        <div className="container">
          <div className="mb-7">
            <h2 className="text-3xl font-medium">All Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            <For
              each={props.posts}
              render={(data, index) => (
                <Fragment key={index}>
                  <Card data={data} />
                </Fragment>
              )}
            />
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
