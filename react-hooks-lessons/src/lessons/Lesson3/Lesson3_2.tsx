import { RefObject, useEffect, useRef, useState } from "react";
// APIから取得する画像のデータ型を定義
interface CatImage {
    id: string;
    url: string;
    width: number;
    height: number;
}
const Lesson3_2 = () => {
    const listRef: RefObject<HTMLUListElement> = useRef<HTMLUListElement>(null);

    const scrollToIndex = (index: number) => {
        console.log(listRef.current);
        const listNode = listRef.current;
        const imgNode = listNode?.querySelectorAll("li > img")[index]; // img要素を取り出す
        console.log(imgNode);

        imgNode?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    };

    const [catImages, setCatImages] = useState<CatImage[]>([]);

    // APIから画像データ（json）を取得する
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const imagesResponse = await fetch("https://api.thecatapi.com/v1/images/search?limit=2");
                const images = await imagesResponse.json();
                setCatImages(images);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div>
            <nav>
                <button onClick={() => scrollToIndex(0)}>Cat1</button>
                <button onClick={() => scrollToIndex(1)}>Cat2</button>
                <button onClick={() => scrollToIndex(2)}>Cat3</button>
            </nav>
            <div style={{ overflowX: "auto", maxWidth: "700px", margin: "auto" }}>
                <ul
                    className="flex items-center justify-between"
                    style={{ minWidth: "1300px" }} // コンテナより大きいサイズを指定
                >
                    <ul className="flex items-center justify-between" style={{ minWidth: "1300px" }} ref={listRef}>
                        {catImages.length > 0 ? (
                            <>
                                <li>
                                    <img src={catImages[0].url} alt="Cat 1" width="200" height="200" />
                                </li>
                                <li>
                                    <img src={catImages[1].url} alt="Cat 2" width="300" height="200" />
                                </li>
                                <li>
                                    <img src={catImages[2].url} alt="Cat 3" width="250" height="200" />
                                </li>
                            </>
                        ) : (
                            <>Loading...</>
                        )}
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default Lesson3_2;
