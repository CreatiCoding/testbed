import { useText } from "./textContext";

export function 제공처() {
    const { text, setText } = useText();

    return (
        <div>
            <h1>제공처</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}