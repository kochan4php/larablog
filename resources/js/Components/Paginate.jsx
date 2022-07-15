import { For } from "@/utils";
import { Link } from "@inertiajs/inertia-react";

const Paginate = ({ links, color = "bg-slate-70" }) => (
  <div class="btn-group">
    <For
      each={links}
      render={(data, index) => (
        <Link
          key={index}
          as="button"
          className={`btn ${color} text-white rounded-md capitalize ${
            data.active ? "btn-active" : ""
          } ${
            !data.url ? "btn-disabled text-slate-300 cursor-not-allowed" : ""
          }`}
          href={data.url}
        >
          <a dangerouslySetInnerHTML={{ __html: data.label }} />
        </Link>
      )}
    />
  </div>
);

export default Paginate;
