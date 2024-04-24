"use client";

import { Content } from "@prismicio/client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

type ContentListProps = {
    items: Content.BlogPostDocument[] | Content.ProjectDocument[];
    contentType: Content.ContentIndexSlice["primary"]["content_type"];
    fallbackItemImage: Content.ContentIndexSlice["primary"]["fallback_item_image"];
    viewMoreText: Content.ContentIndexSlice["primary"]["view_more_text"];
};
export default function ContentList({
    items,
    contentType,
    fallbackItemImage,
    viewMoreText = "Read More",
}: ContentListProps) {
    const urlPrefix = contentType === "Blog" ? "/blog" : "/projects";

    return (
        <div>
            <ul className='grid border-b border-b-stone-300'>
                {items.map((item, index) => (
                    <li key={index} className='list-item opacity-0f'>
                        <Link
                            href={`${urlPrefix}/${item.uid}`}
                            className='flex flex-col justify-between border-t border-t-stone-300 py-10  text-slate-200 md:flex-row'
                            aria-label={item.data.title || ""}
                        >
                            <div className='flex flex-col'>
                                <span className='text-3xl font-bold'>
                                    {item.data.title}
                                </span>
                                {/* <div className='flex gap-3 text-amber-300 text-lg font-bold'>
                                    {items.tags &&
                                        items.tags.map((tag, index) => (
                                            <span key={index}>{tag}</span>
                                        ))}
                                </div>
                                      */}
                            </div>
                            <span className='ml-auto flex items-center gap-2 text-xl font-medium md:ml-0'>
                                {viewMoreText} <MdArrowOutward />
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
