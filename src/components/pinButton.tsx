import { Pin } from 'lucide-react'

type Props = {
  isPinned: boolean
  onToggle: (e: React.MouseEvent) => void
}

export function PinButton({ isPinned, onToggle }: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isPinned ? 'Unpin note' : 'Pin note'}
      aria-pressed={isPinned}
      className="p-1 rounded hover:bg-gray-100 transition"
    >
      <Pin
        size={16}
        className={isPinned ? 'fill-yellow-400 text-yellow-400' : ' text-gray-400'}
      />
    </button>
  )
}