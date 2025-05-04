import { useText } from "./textContext";

export function 사용처() {
    const { text } = useText();

    return (
        <div>
            <h1>사용처</h1>
            <p>{text}</p>
        </div>
    )
}