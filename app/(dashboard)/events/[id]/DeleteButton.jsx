"use client";

import { useTransition } from "react";

// icons & UI
import { TiDelete } from "react-icons/ti";
import { deleteEvent } from "../actions";

export default function DeleteButton({ id }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className="btn-primary"
      onClick={() => startTransition(() => deleteEvent(id))}
      disabled={isPending}
    >
      {isPending && (
        <>
          <TiDelete />
          Deleting....
        </>
      )}
      {!isPending && (
        <>
          <TiDelete />
          Delete Event
        </>
      )}
    </button>
  );
}
