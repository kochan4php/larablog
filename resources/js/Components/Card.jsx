import { Link } from "@inertiajs/inertia-react";

const Card = (props) => {
  console.log("props card: ", props);
  return (
    <div class="card glass rounded-md">
      <figure>
        <img
          src="https://placeimg.com/400/225/arch"
          width="100%"
          alt="car!"
          className="object-cover"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{props.data.title}</h2>
        <p>{props.data.excerpt}</p>
        <div class="card-actions justify-start">
          <Link className="underline" href={`/article/${props.data.slug}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
