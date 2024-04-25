import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ImageBlock`.
 */
export type ImageBlockProps = SliceComponentProps<Content.ImageBlockSlice>;

/**
 * Component for "ImageBlock" Slices.
 */
const ImageBlock = ({ slice }: ImageBlockProps): JSX.Element => {
    return (
        <PrismicNextImage
            field={slice.primary.image}
            className='not-prose w-full h-full rounded-md my-10 md:my-14 lg:my-16 border border-stone-600'
        />
    );
};

export default ImageBlock;
