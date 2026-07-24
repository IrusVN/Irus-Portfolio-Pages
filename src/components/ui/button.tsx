import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { playClick } from "@/lib/sound"
import type { MouseEvent } from 'react'

import { buttonVariants } from "./buttonVariants"

function Button({
  className,
  variant = "default",
  size = "default",
  onClick,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants> & { onClick?: (e: MouseEvent<HTMLButtonElement>) => void }) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    try {
      playClick()
    } catch (err) {
      void err
    }
    if (onClick) onClick(e)
  }

  return (
    <ButtonPrimitive
      data-slot="button"
      data-sound-attached="true"
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={handleClick}
      {...props}
    />
  )
}

export { Button }
