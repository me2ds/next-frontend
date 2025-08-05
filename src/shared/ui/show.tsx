type Props = {
  when: any
  children: React.ReactNode
  fallback?: React.ReactNode
}

function Show({ when, children, fallback = null }: Props) {
  if (when) return children
  return fallback
}

export { Show }
