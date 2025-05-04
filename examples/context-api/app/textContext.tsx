import { createContext, useContext } from "react";

interface TextContextType {
    text: string;
    setText: (text: string) => void;
}

const textContext = createContext<TextContextType>({
    text: "",
    setText: (text: string) => { },
});

export const useText = () => {
    const context = useContext(textContext);
    if (!context) {
        throw new Error("useText must be used within a TextProvider");
    }
    return context;
};

export const TextProvider = ({ value, children }: { value: TextContextType, children: React.ReactNode }) => {
    return (
        <textContext.Provider value={value}>
            {children}
        </textContext.Provider>
    );
};
