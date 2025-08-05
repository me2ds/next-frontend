


function fileToURL(file: Blob) {
  return URL.createObjectURL(file);
}

export { fileToURL }