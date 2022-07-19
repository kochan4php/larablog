import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Select from "@/Components/Select";
import ValidationErrors from "@/Components/ValidationErrors";
import Authenticated from "@/Layouts/Authenticated";
import { For, RenderIfFalse, RenderIfTrue } from "@/utils";
import { useForm } from "@inertiajs/inertia-react";
import { Fragment, useEffect } from "react";
import { TrixEditor } from "react-trix";
import { Inertia } from "@inertiajs/inertia";

const Edit = (props) => {
  const { article } = props;

  const { data, setData, processing, errors, patch } = useForm({
    title: article.title,
    category_id: article.category_id,
    image: null,
    content: article.content,
  });
  console.log(article.image);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(data);
    Inertia.post(`/dashboard/articles/${article.slug}`, {
      _method: "put",
      ...data,
    });
  };

  useEffect(() => {
    const image = document.getElementById("image");
    const image_preview = document.querySelector(".image-preview");

    image.addEventListener("change", async function () {
      const file = this.files[0];
      image_preview.src = await URL.createObjectURL(file);
      image_preview.style.display = "block";
    });
  }, []);

  return (
    <Authenticated auth={props.auth} errors={props.errors} title="Buat Artikel">
      <div className="py-6">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white text-slate-900 overflow-hidden shadow-lg shadow-slate-400 sm:rounded-md">
            <div className="p-6 lg:p-7">
              <div className="mb-4">
                <h2 className="text-2xl text-center md:text-3xl mb-3">
                  Edit artikel kamu
                </h2>
                <hr className="border-t border-t-slate-300" />
              </div>
              <div className="mb-5">
                <div className="max-w-3xl mx-auto">
                  <ValidationErrors errors={errors} />
                  <form onSubmit={submitHandler}>
                    <div>
                      <Label forInput="title" value="Judul Artikel" />
                      <Input
                        isDark
                        autoComplete="off"
                        type="text"
                        name="email"
                        className="mt-1 block w-full"
                        placeholder="Tulis judul artikel kamu disini"
                        defaultValue={article.title}
                        handleChange={(e) => setData("title", e.target.value)}
                      />
                    </div>
                    <div className="mt-4">
                      <Label forInput="category_id" value="Kategori Artikel" />
                      <Select
                        name="category_id"
                        id="category_id"
                        onChange={(e) => setData("category_id", e.target.value)}
                      >
                        <For
                          each={props.categories}
                          render={(category, index) => (
                            <Fragment key={index}>
                              <RenderIfTrue
                                isTrue={category.id === article.category_id}
                              >
                                <option value={category.id} selected>
                                  {category.name}
                                </option>
                              </RenderIfTrue>
                              <RenderIfFalse
                                isFalse={category.id === article.category_id}
                              >
                                <option value={category.id}>
                                  {category.name}
                                </option>
                              </RenderIfFalse>
                            </Fragment>
                          )}
                        />
                      </Select>
                    </div>
                    <div className="mt-4">
                      <Label
                        forInput="image"
                        value="Gambar Article (jpg, png, webp)"
                      />
                      <img
                        src={`/storage/${article.image}`}
                        className="image-preview my-4 w-full md:w-1/2 rounded"
                      />
                      <Input
                        autoComplete="off"
                        type="file"
                        name="image"
                        id="image"
                        className="mt-1 block w-full !px-1.5"
                        handleChange={(e) =>
                          setData("image", e.target.files[0])
                        }
                      />
                    </div>
                    <div className="mt-4">
                      <Label
                        forInput="content"
                        value="Isi Content"
                        className="mb-1"
                      />
                      <TrixEditor
                        className="outline-none px-3 py-1.5 rounded-sm text-base !font-lexend ring-2 focus:ring-4 focus:ring-opacity-50 focus:ring-sky-500 transition-all selection:bg-rose-700 selection:text-rose-300 border-0  block w-full"
                        placeholder="your content starts here"
                        value={article.content}
                        onChange={(e) => setData("content", e)}
                      />
                    </div>
                    <div className="flex items-center justify-start mt-4 gap-4">
                      <Button type="submit" processing={processing}>
                        Perbarui artikel
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default Edit;
