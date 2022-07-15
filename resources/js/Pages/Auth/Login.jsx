import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import Guest from "@/Layouts/Guest";
import { RenderIfTrue } from "@/utils";
import { Link, useForm } from "@inertiajs/inertia-react";
import { useEffect } from "react";

const Login = ({ status, canResetPassword }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: "",
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const onHandleChange = (event) =>
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    );

  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };

  return (
    <Guest title="Log in">
      <RenderIfTrue isTrue={status}>
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
      </RenderIfTrue>

      <ValidationErrors errors={errors} />

      <form onSubmit={submit}>
        <div>
          <Label forInput="email" value="Email" />
          <Input
            type="text"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            placeholder="example@gmail.com"
            isFocused={true}
            handleChange={onHandleChange}
          />
        </div>
        <div className="mt-4">
          <Label forInput="password" value="Password" />
          <Input
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="current-password"
            placeholder="yourpassword"
            handleChange={onHandleChange}
          />
        </div>
        <div className="block mt-4">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              value={data.remember}
              handleChange={onHandleChange}
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div>
        <div className="flex items-center justify-end mt-4 gap-4">
          <Link
            href={route("register")}
            className="hover:underline text-sm text-gray-600 hover:text-gray-900"
          >
            Don't have account?
          </Link>
          <RenderIfTrue isTrue={canResetPassword}>
            <Link
              href={route("password.request")}
              className="hover:underline text-sm text-gray-600 hover:text-gray-900"
            >
              Forgot your password?
            </Link>
          </RenderIfTrue>
          <Button processing={processing}>Log in</Button>
        </div>
      </form>
    </Guest>
  );
};

export default Login;
