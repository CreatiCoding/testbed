'use client';

import { useState } from "react";
import { TextProvider } from "./textContext";
import { 제공처 } from "./제공처";
import { 사용처 } from "./사용처";

export function HomeComponent() {
    const [text, setText] = useState("");

    return (
        <TextProvider value={{ text, setText }}>
            <제공처 />
            <사용처 />
        </TextProvider>
    );
}
