"use client"

import { Container, clx } from "@medusajs/ui"
import Image from "next/image"
import React from "react"

import PlaceholderImage from "@modules/common/icons/placeholder-image"

type ThumbnailProps = {
  thumbnail?: string | null
  // TODO: Fix image typings
  images?: any[] | null
  size?: "small" | "medium" | "large" | "full" | "square"
  isFeatured?: boolean
  className?: string
  "data-testid"?: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  size = "small",
  isFeatured,
  className,
  "data-testid": dataTestid,
}) => {
  const [hovered, setHovered] = React.useState(false)
  const [hoverIndex, setHoverIndex] = React.useState(0)
  const imageList =
    images && images.length > 0 ? images : thumbnail ? [{ url: thumbnail }] : []
  React.useEffect(() => {
    if (hovered && imageList.length > 1) {
      const interval = setInterval(() => {
        setHoverIndex((prev) => (prev + 1) % imageList.length)
      }, 900)
      return () => clearInterval(interval)
    } else {
      setHoverIndex(0)
    }
  }, [hovered, imageList.length])

  const displayImage =
    imageList[hovered && imageList.length > 1 ? hoverIndex : 0]?.url

  return (
    <Container
      className={clx(
        "relative w-full overflow-hidden p-4 border border-empire-gold bg-empire-sand/60 dark:bg-empire-midnight shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150",
        className,
        {
          "aspect-[11/14]": isFeatured,
          "aspect-[9/16]": !isFeatured && size !== "square",
          "aspect-[1/1]": size === "square",
          "w-[180px]": size === "small",
          "w-[290px]": size === "medium",
          "w-[440px]": size === "large",
          "w-full": size === "full",
        }
      )}
      data-testid={dataTestid}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ImageOrPlaceholder image={displayImage} size={size} />
    </Container>
  )
}

const ImageOrPlaceholder = ({
  image,
  size,
}: Pick<ThumbnailProps, "size"> & { image?: string }) => {
  return image ? (
    <Image
      src={image}
      alt="Thumbnail"
      className="absolute inset-0 object-cover object-center transition-opacity duration-500"
      draggable={false}
      quality={90}
      sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
      fill
    />
  ) : (
    <div className="w-full h-full absolute inset-0 flex items-center justify-center">
      <PlaceholderImage size={size === "small" ? 16 : 24} />
    </div>
  )
}

export default Thumbnail
