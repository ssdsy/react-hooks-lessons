import { useRef, useOptimistic } from "react";
import { Message } from "./Lesson6_1";

const Thread = ({
  messages,
  sendMessage,
}: {
  messages: Message[];
  sendMessage: (formData: FormData) => Promise<void>;
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const formAction = async (formData: FormData) => {
    // const formData = new FormData(formRef.current!);
    addOptimisticMessage(formData.get("message"));

    // inputを空にする
    formRef.current?.reset();

    // データを渡す
    await sendMessage(formData);
  };

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state: Message[], newMessage: Message) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <div>
      {/* {messages.map((message: Message) => ( */}
      {optimisticMessages.map((message: Message, index: number) => (
        <div key={index}>
          {message.text} {message.sending && <small>(Sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input
          type="text"
          name="message"
          placeholder="Hello!"
          className="border-2 px-2 py-2 rounded-md"
        />
        <button type="submit" className="ml-2 border-2 px-2 py-2 rounded-md">
          送信
        </button>
      </form>
    </div>
  );
};

export default Thread;
