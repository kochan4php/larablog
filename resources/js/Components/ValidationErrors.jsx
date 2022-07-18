import { For, RenderIfTrue } from "@/utils";

const ValidationErrors = ({ errors }) => (
  <RenderIfTrue isTrue={Object.keys(errors).length > 0}>
    <div className="mb-4 !font-lexend">
      <div className="font-semibold text-base text-red-600">
        Sepertinya ada kesalahan yang kamu lakukan
      </div>

      <ul className="mt-3 list-disc list-inside text-base text-red-600">
        <For
          each={Object.keys(errors)}
          render={(key, index) => <li key={index}>{errors[key]}</li>}
        />
      </ul>
    </div>
  </RenderIfTrue>
);

export default ValidationErrors;
