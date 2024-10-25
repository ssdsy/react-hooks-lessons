"use client";

import { useFormState } from "react-dom";
import { formAction } from "./actions";
import IncrementButton from "./IncrementButton";

// const formAction = async () => {
//   // サーバー側で実行する
//   "use server";
//   // サーバーにログが出る
//   // console.log("server actions");
// };

export default function Home() {
  const [state, formDispatch] = useFormState(formAction, 0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={formDispatch}>
        {/* useFormStatusはformの内部にあるコンポーネントから呼び出す必要がある */}
        <IncrementButton />
      </form>
      <span>count: {state}</span>
    </main>
  );
}
