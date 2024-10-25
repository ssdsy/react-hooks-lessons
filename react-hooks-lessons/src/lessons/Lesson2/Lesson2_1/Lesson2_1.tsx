import { useEffect, useState } from "react";

const Lesson2_1 = () => {
    // カーソルにあわせてdivタグの位置を動かす
    // windowオブジェクトを使う
    const [position, setPosition] = useState({ x: 0, y: 0 });
    // console.log("rendering"); // マウスを動かすたびにレンダリングされる

    useEffect(() => {
        function handleMove(e) {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener("pointermove", handleMove);

        // クリーンアップ関数
        return () => {
            // アンマウントする前に呼び出される
            window.removeEventListener("pointermove", handleMove);
        };
    }, []);

    return (
        <div
            style={{
                position: "absolute",
                backgroundColor: "blue",
                borderRadius: "50%",
                opacity: 0.6,
                pointerEvents: "none",
                // useEffectでsetPositionされた座標
                transform: `translate(${position.x}px, ${position.y}px`,
                left: -20,
                top: -20,
                width: 50,
                height: 50,
            }}
        ></div>
    );
};

export default Lesson2_1;
