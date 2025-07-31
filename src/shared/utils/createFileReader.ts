const createFileReader = () => {
  const reader = new FileReader()
  const promise = new Promise<string | ArrayBuffer | null>(
    (resolve, reject) => {
      if (!reader) return
      reader.onload = () => resolve(reader.result)
      reader.onerror = () => reject(reader.error)
    }
  )
  return { reader, promise }
}

export { createFileReader }
