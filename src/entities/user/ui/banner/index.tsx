import Image from "next/image"
import { cn } from "@/shared/lib/utils"

type Props = {
  src?: string | null
  className?: string
}

const UserBanner = ({ src, className }: Props) => {
  return (
    <div
      className={cn(className, "size-full rounded-xl overflow-hidden relative")}
    >
      {src && (
        <Image
          src={src}
          alt={"user banner"}
          fill={true}
          className={"object-cover"}
        />
      )}
      {!src && <div className={"bg-accent size-full"} />}
    </div>
  )
}

export { UserBanner }
