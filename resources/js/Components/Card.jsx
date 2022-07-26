// import { Link } from "@inertiajs/inertia-react";
// import moment from "moment";

// const Card = (props) => (
//   <div className="card bg-slate-50 rounded-md shadow-md hover:shadow-md shadow-slate-400 hover:shadow-slate-400">
//     <figure>
//       <img
//         src={
//           props.article.image !== ""
//             ? `/storage/${props.article.image}`
//             : "/storage/articles-image/default-article-image.png"
//         }
//         width="100%"
//         alt="car!"
//         className="object-cover select-none"
//       />
//     </figure>
//     <div className="card-body">
//       <h2 className="card-title text-2xl mb-2">{props.article.title}</h2>
//       <div className="badge badge-primary py-2.5 !font-lexend text-sm mb-2">
//         {moment(props.article.created_at).format("LL")}&nbsp; by &nbsp;
//         {props.article.user.name}
//       </div>
//       <p className="text-lg">{props.article.excerpt}</p>
//       <div className="card-actions flex justify-between items-center mt-3 text-base">
//         <Link
//           className="underline !font-lexend"
//           href={`/articles/${props.article.slug}`}
//         >
//           Read More
//         </Link>
//         <div class="badge badge-secondary py-2.5 !font-lexend">
//           {props.article.category.name}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default Card;

import { Link } from "@inertiajs/inertia-react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FeatherIcon from "feather-icons-react";
import moment from "moment";

const CardArticle = (props) => {
  return (
    <Card
      sx={{
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.15), 0 2px 4px -2px rgb(0 0 0 / 0.15)",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.article.user.name.split("")[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <FeatherIcon icon="more-vertical" />
          </IconButton>
        }
        title={props.article.user.name}
        subheader={moment(props.article.created_at).format("LL")}
      />
      <CardMedia
        component="img"
        image={
          props.article.image !== ""
            ? `/storage/${props.article.image}`
            : "/storage/articles-image/default-article-image.png"
        }
        alt={props.article.title}
      />
      <CardContent>
        <Typography variant="h6">
          <Link href={`/articles/${props.article.slug}`}>
            {props.article.title}
          </Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like artikel">
          <FeatherIcon icon="heart" />
        </IconButton>
        <IconButton aria-label="save as bookmark">
          <FeatherIcon icon="bookmark" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardArticle;
