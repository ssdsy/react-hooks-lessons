import { ChangeEvent, useState } from "react";

// 2-4
// let age = 0;

const Lesson1_1 = () => {
    // 型numberと初期値0を設定
    const [age, setAge] = useState<number>(0);
    const [name, setName] = useState("ShinCode");

    console.log("rendering"); // 2-8 初期表示時とボタン押下時にレンダリングされる
    // 下のhandleClickも毎回生成されてfor文を回すとパフォーマンス悪化するので、関数のメモ化をするとよい

    // クリックでageを1ずつ増やす
    const handleClick = () => {
        // 2-4
        // 再レンダリングされないので、値は増えるが画面の表示は変わらない
        // age = age + 1;

        // 2-5, 2-6
        // クリックで画面の値が+1されていく
        // 同じ処理を増やしても1ずつしか増えない
        // バッチ処理（毎回 0 + 1）している
        // setAge(age + 1);
        // console.log(age);

        // 2-7
        // 更新用関数（この場合はprevAge）を使うことでsetAgeの度に増やせる
        // setAge((prevAge) => prevAge + 1); // setAge((0) => 0 + 1)
        // console.log(age); // バッチ処理なので、ここは3が表示される
        // setAge((prevAge) => prevAge + 1); // setAge((1) => 1 + 1)
        // console.log(age);
        // setAge((prevAge) => prevAge + 1); // setAge((2) => 2 + 1)
        // console.log(age); // 3ずつ増える

        setAge((prevAge) => prevAge + 1); // setAge((0) => 0 + 1)
        setAge((prevAge) => prevAge + 1); // setAge((1) => 1 + 1)
        setAge((prevAge) => prevAge + 1); // setAge((2) => 2 + 1)

        console.log(name);
    };

    return (
        <div>
            <input type="text" value="name" onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
            <button onClick={handleClick} className="border p-2 rounded-md bg-red-100">
                Add Age
            </button>
            <p>You are {age}</p>
        </div>
    );
};

export default Lesson1_1;
