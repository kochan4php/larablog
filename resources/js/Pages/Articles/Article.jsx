import Main from "@/Layouts/Main";
import { Link } from "@inertiajs/inertia-react";

const Article = (props) => {
  return (
    <Main data={props} title="Detail Article">
      <section className="pt-6 pb-10">
        <div className="container">
          <div className="mb-7">
            <Link href="/" className="underline">
              &laquo; Back
            </Link>
          </div>
          <div className="mb-7">
            <h2 className="text-3xl font-medium">Halaman Detail Article</h2>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Article;
