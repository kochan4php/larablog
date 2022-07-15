import { Link } from "@inertiajs/inertia-react";

const Card = (props) => {
  const author = props.authors.find(
    (author) => author.id === props.article.user_id
  );

  return (
    <div className="card glass rounded-md shadow-lg hover:shadow-lg shadow-slate-300">
      <figure>
        <img
          src="https://placeimg.com/400/225/arch"
          width="100%"
          alt="car!"
          className="object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl mb-2">{props.article.title}</h2>
        <div className="badge badge-primary !font-lexend text-base mb-2">
          Oleh {author.name}
        </div>
        <p className="text-lg">{props.article.excerpt}</p>
        <div className="card-actions justify-start mt-3 text-base">
          <Link className="underline" href={`/articles/${props.article.slug}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
