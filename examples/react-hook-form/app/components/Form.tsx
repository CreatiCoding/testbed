'use client';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { overlay } from "overlay-kit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const formSchema = z.object({
    identifier: z.string()
        .nonempty({ message: "닉네임을 입력해주세요." })
        .min(4, { message: "닉네임을 4자 이상 입력해주세요." }),
});

async function openErrorMessage({ message }: { message: string }) {
    await overlay.open(({ close, isOpen }) => {
        if (!isOpen) return null;

        return (
            <div>
                <pre>{message}</pre>
                <button onClick={() => close()}>확인</button>
            </div>
        );
    });
}

export function Form() {
    const { handleSubmit, register, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        if (data.identifier === "creco") {
            await openErrorMessage({ message: "이미 존재하는 닉네임입니다." });
            return;
        }

        alert('제출되었습니다.\n' + JSON.stringify(data));
    }

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            openErrorMessage({ message: Object.values(errors).map(error => error.message).join('\n') }).catch(console.error);
        }
    }, [errors]);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} onError={(errors) => console.log(errors)}>
                <input {...register("identifier")} />
                <button type="submit">제출</button>
            </form>
        </div>
    );
}