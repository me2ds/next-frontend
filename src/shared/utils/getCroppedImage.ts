import { Area } from "react-easy-crop"

type Format = "image/png" | "image/jpeg" | "image/webp"

type Props = {
  data: Blob
  pixelCrop: Area
  format?: Format
  quality?: number
}

var canvas: OffscreenCanvas | null = null
var ctx: OffscreenCanvasRenderingContext2D | null = null

async function getCroppedImage({
  data,
  pixelCrop,
  format = "image/jpeg",
  quality = 1,
}: Props) {
  const imageBitmap = await createImageBitmap(data)

  const width = pixelCrop.width
  const height = pixelCrop.height
  if (!canvas) {
    canvas = new OffscreenCanvas(width, height)
    ctx = canvas.getContext("2d")
  }
  canvas.width = width
  canvas.height = height
  ctx!.clearRect(0, 0, width, height)
  ctx!.drawImage(
    imageBitmap,
    pixelCrop.x,
    pixelCrop.y,
    width,
    height,
    0,
    0,
    width,
    height
  )

  return canvas.convertToBlob({
    type: format,
    quality: quality,
  })
}

export { getCroppedImage }
