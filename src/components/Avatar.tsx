"use client";

import { PrismicNextImage } from "@prismicio/react";
import { ImageField } from "@prismicio/types";
import { useRef } from "react";
import clsx from "clsx";

type AvatarProps = {
    image: ImageField;
    className?: string;
};

export default function Avatar({ image, className }: AvatarProps) {
    const component = useRef(null);

    return (
        <div
            ref={component}
            className={clsx("relative h-full w-full", className)}
        >
            <div
                className='avatar aspect-square overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0'
                style={{ perspective: "500px", perspectiveOrigin: "150% 150%" }}
            >
                <PrismicNextImage
                    field={image}
                    className='avatar-image h-full w-full object-fill'
                    imgixParams={{ q: 90 }}
                />
            </div>
        </div>
    );
}
