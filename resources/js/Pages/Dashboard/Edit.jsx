import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Select from "@/Components/Select";
import Authenticated from "@/Layouts/Authenticated";
import { For, RenderIfFalse, RenderIfTrue } from "@/utils";
import { Fragment } from "react";
import { TrixEditor } from "react-trix";

const Create = (props) => {
  console.log(props);

  const { article, author } = props;

  const handleChange = (html, text) => {
    // html is the new html content
    // text is the new text content
  };

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
                  <form>
                    <div>
                      <Label forInput="title" value="Judul Artikel" />
                      <Input
                        isDark
                        autoComplete="off"
                        type="text"
                        name="email"
                        className="mt-1 block w-full"
                        placeholder="Tulis judul artikel kamu disini"
                        value={article.title}
                      />
                    </div>
                    <div className="mt-4">
                      <Label forInput="category" value="Kategori Artikel" />
                      <Select
                        name="category"
                        id="category"
                        onChange={(e) => console.log(e.target.value)}
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
                        forInput="content"
                        value="Isi Content"
                        className="mb-1"
                      />
                      <TrixEditor
                        className="outline-none px-3 py-1.5 rounded-sm text-base !font-lexend ring-2 focus:ring-4 focus:ring-opacity-50 focus:ring-sky-500 transition-all selection:bg-rose-700 selection:text-rose-300 border-0  block w-full"
                        onChange={handleChange}
                        placeholder="your content starts here"
                        value={article.content}
                      />
                    </div>
                    <div className="flex items-center justify-start mt-4 gap-4">
                      <Button>Perbarui artikel</Button>
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

export default Create;
