import { ROUNDED } from "@/utils";
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/utils";

const avatarSizes = {
  xs: "h-6 w-6",
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-14 w-14",
  "2xl": "h-16 w-16",
  "3xl": "h-20 w-20",
  "4xl": "h-24 w-24",
};

const placeholderTextSizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
};

const whithTextSizes = {
  xs: {
    name: "text-[0.65rem]",
    subtitle: "text-[0.35rem]",
  },
  sm: {
    name: "text-xs",
    subtitle: "text-[0.50rem]",
  },
  md: {
    name: "text-sm",
    subtitle: "text-xs",
  },
  lg: {
    name: "text-base",
    subtitle: "text-sm",
  },
  xl: {
    name: "text-lg",
    subtitle: "text-base",
  },
  "2xl": {
    name: "text-xl",
    subtitle: "text-lg",
  },
  "3xl": {
    name: "text-2xl",
    subtitle: "text-xl",
  },
  "4xl": {
    name: "text-3xl",
    subtitle: "text-2xl",
  },
};

type AvatarProps = {
  size?: keyof typeof avatarSizes;
  round?: keyof typeof ROUNDED;
} & (
  | {
      type: "image";
      src: string;
      name?: string;
    }
  | {
      type: "placeholder";
      name: string;
    }
  | {
      type: "whithText";
      src: string;
      name: string;
      subtitle: string;
      position?: "left" | "right";
    }
);

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
