import { For } from "@/utils";
import { Link } from "@inertiajs/inertia-react";

const Paginate = ({ links, color }) => (
  <div class="btn-group shadow-lg">
    <For
      each={links}
      render={(data, index) => (
        <Link
          key={index}
          as="button"
          className={`btn ${color} rounded-md capitalize border-none bg-slate-100 hover:bg-slate-300 text-slate-900 ${
            data.active ? "btn-active" : ""
          } ${
            !data.url ? "btn-disabled text-slate-500 cursor-not-allowed" : ""
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
