import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function usePinnedNotes() {
  const [pinnedIds, setPinnedIds] = useLocalStorage<string[]>('notes-pinned', [])

  const isPinned = useCallback(
    (noteId: string) => pinnedIds.includes(noteId),
    [pinnedIds]
  )

  const togglePin = useCallback(
    (noteId: string) => {
      setPinnedIds(prev =>
        prev.includes(noteId)
          ? prev.filter(id => id !== noteId)
          : [...prev, noteId]
      )
    },
    [setPinnedIds]
  )

  return { pinnedIds, isPinned, togglePin }
}