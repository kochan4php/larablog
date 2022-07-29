import back from "@/Helpers/back";
import Authenticated from "@/Layouts/Authenticated";
import { Link, useForm } from "@inertiajs/inertia-react";
import FeatherIcon from "feather-icons-react";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import ValidationErrors from "@/Components/ValidationErrors";
import Button from "@/Components/Button";

const Profile = (props) => {
  const { data, errors, processing, post, setData } = useForm({});

  const submitHandler = () => {
    console.log("Asu");
  };

  return (
    <Authenticated auth={props.auth} errors={props.errors} title="My Profile">
      <div className="p-6 lg:p-7">
        <div className="mb-5">
          <div className="flex justify-between w-full">
            <h2 className="text-2xl md:text-3xl mb-3">Profil Saya</h2>
            <Link
              className="btn btn-secondary rounded btn-sm border-none outline-none flex capitalize items-center justify-center"
              as="button"
              onClick={back}
            >
              <FeatherIcon icon="chevrons-left" size={20} />
              <span>&nbsp;Kembali&nbsp;</span>
            </Link>
          </div>
          <hr className="border-t border-t-slate-300" />
        </div>
        <div className="mb-5">
          <div className="max-w-3xl mx-auto">
            <ValidationErrors errors={errors} />
            <form onSubmit={submitHandler}>
              <div>
                <Label forInput="title" value="Judul Artikel" />
                <Input
                  autoComplete="off"
                  type="text"
                  name="title"
                  className="mt-1 block w-full"
                  placeholder="Tulis judul artikel kamu disini"
                  // value={data.title}
                  handleChange={(e) => setData("title", e.target.value)}
                />
              </div>
              <div className="mt-4">
                <Label
                  forInput="image"
                  value="Gambar Article (jpg, png, webp)"
                />
                <img className="image-preview my-4 w-full md:w-1/2 rounded hidden" />
                <Input
                  autoComplete="off"
                  type="file"
                  name="image"
                  id="image"
                  className="mt-1 block w-full !px-1.5"
                  placeholder="Tulis judul artikel kamu disini"
                  handleChange={(e) => setData("image", e.target.files[0])}
                />
              </div>
              <div className="flex items-center justify-start mt-4 gap-3">
                <Button type="submit" processing={processing}>
                  Buat artikel baru
                </Button>
                <Link
                  as="button"
                  href={route("dashboard")}
                  className="inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150"
                >
                  Batalkan
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default Profile;
