"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large" | "og";
  className?: string;
  priority?: boolean;
}

const imageSizes = {
  small: "/images/profile/profile-200.png",
  medium: "/images/profile/profile-400.png", 
  large: "/images/profile/profile.png",
  og: "/images/profile/og-image.png"
};

const imageDimensions = {
  small: { width: 200, height: 200 },
  medium: { width: 400, height: 400 },
  large: { width: 1080, height: 1080 },
  og: { width: 1200, height: 630 }
};

export function OptimizedImage({ 
  src, 
  alt, 
  size = "medium", 
  className,
  priority = false 
}: OptimizedImageProps) {
  // If it's a profile image, use optimized versions
  const isProfileImage = src.includes("/images/profile/profile");
  const optimizedSrc = isProfileImage ? imageSizes[size] : src;
  const dimensions = isProfileImage ? imageDimensions[size] : undefined;

  return (
    <Image
      src={optimizedSrc}
      alt={alt}
      width={dimensions?.width}
      height={dimensions?.height}
      className={cn(className)}
      priority={priority}
      quality={85}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  );
}
