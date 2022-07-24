import { Link } from "@inertiajs/inertia-react";
import moment from "moment";

const Card = (props) => (
  <div className="card bg-slate-50 rounded-md shadow-md hover:shadow-md shadow-slate-400 hover:shadow-slate-400">
    <figure>
      <img
        src={
          props.article.image !== ""
            ? `/storage/${props.article.image}`
            : "/storage/articles-image/default-article-image.png"
        }
        width="100%"
        alt="car!"
        className="object-cover select-none"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-2xl mb-2">{props.article.title}</h2>
      <div className="badge badge-primary py-2.5 !font-lexend text-sm mb-2">
        {moment(props.article.created_at).format("LL")}&nbsp; by &nbsp;
        {props.article.user.name}
      </div>
      <p className="text-lg">{props.article.excerpt}</p>
      <div className="card-actions flex justify-between items-center mt-3 text-base">
        <Link
          className="underline !font-lexend"
          href={`/articles/${props.article.slug}`}
        >
          Read More
        </Link>
        <div class="badge badge-secondary py-2.5 !font-lexend">
          {props.article.category.name}
        </div>
      </div>
    </div>
  </div>
);

export default Card;
