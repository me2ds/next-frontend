import { useState, useCallback } from "react"
import Cropper, { Area } from "react-easy-crop"
import { getCroppedImage } from "../utils/getCroppedImage"

type Props = {
  imageUrl: string
  imageData: Blob
  ref: React.RefObject<HTMLDivElement | null>
  callback: (corp: Blob) => void
}

const ImageCropper = ({ imageUrl, imageData, ref, callback }: Props) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)

  const onCropCompleteCallback = useCallback(
    (_: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels)
    },
    []
  )

  const handleSave = useCallback(async () => {
    if (!croppedAreaPixels) return
    const image = await getCroppedImage({
      data: imageData,
      pixelCrop: croppedAreaPixels,
      format: "image/jpeg",
      quality: 1,
    })
    callback(image)
  }, [croppedAreaPixels, imageData, callback])

  return (
    <div className="relative w-full flex-1 rounded-full">
      <Cropper
        image={imageUrl}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropCompleteCallback}
        showGrid={false}
        cropShape={"round"}
      />
      <div ref={ref} onClick={handleSave} />
    </div>
  )
}

export { ImageCropper }
