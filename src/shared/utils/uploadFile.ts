
type Props = {
  accept: string
  multiple?: boolean
  /** @description file max size in bytes */
  maxSize?: number
}

async function uploadFile(props: Props & { multiple: true }): Promise<File[]>
async function uploadFile(props: Props & { multiple?: false }): Promise<File>

async function uploadFile({ accept, multiple = false, maxSize }: Props) {
  const input = document.createElement("input")
  input.type = "file"
  input.accept = accept
  input.multiple = multiple

  const file = () => new Promise<File>((resolve, reject) => {
    input.onchange = (e) => {
      const data = (e.target as HTMLInputElement).files
      if (!data) return reject(new Error("No file selected"))
      const file = data[0]
      if (!maxSize) return resolve(file);
      if (file.size > maxSize) return reject(new Error("File is too large"))
      resolve(file)
    }
  })

  const files = () => new Promise<File[]>((resolve, reject) => {
    input.onchange = (e) => {
      const data = (e.target as HTMLInputElement).files
      if (!data) return reject(new Error("No file selected"));
      const files = Array.from(data).filter((file) => {
        if (!maxSize) return true
        return file.size <= maxSize
      })
      if (files.length === 0) return reject(new Error("All files too large"));
      resolve(files)
    }
  })
  input.click()
  return multiple ? files() : file()
}

export { uploadFile }
