import { useRef } from "react";

const Lesson3_1 = () => {
    const ref = useRef(0);
    console.log(ref);

    function handleClick() {
        ref.current = ref.current + 1;
        alert("you clicked: " + ref.current);
    }

    return (
        <div>
            <input type="text" />
            <button onClick={handleClick}>Click me!</button>
            <p></p>
        </div>
    );
};

export default Lesson3_1;
