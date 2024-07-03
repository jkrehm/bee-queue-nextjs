'use client';

import { useFormState as useActionState } from "react-dom";
import submit from '@/app/actions/submit'

export default function Home() {
  const [result, formAction] = useActionState(submit, "");

  return (
    <form action={formAction}>
      <button type="submit">Submit</button>

      <p>{result}</p>
    </form>
  );
}
