import { For, RenderIfTrue } from "@/utils";

const ValidationErrors = ({ errors }) => (
    <RenderIfTrue isTrue={Object.keys(errors).length > 0}>
        <div className="mb-4">
            <div className="font-medium text-red-600">
                Whoops! Something went wrong.
            </div>

            <ul className="mt-3 list-disc list-inside text-sm text-red-600">
                <For
                    each={Object.keys(errors)}
                    render={(key, index) => <li key={index}>{errors[key]}</li>}
                />
            </ul>
        </div>
    </RenderIfTrue>
);

export default ValidationErrors;
