import SubmitButton from "@/app/components/SubmitButton";
import { addEvent } from "../actions";

export default function CreateForm() {
  return (
    <form action={addEvent} className="w-1/2">
      <label>
        <span>Title:</span>
        <input name="title" required type="text" />
      </label>
      <label>
        <span>Body:</span>
        <textarea name="body" required />
      </label>

      <SubmitButton />
    </form>
  );
}
