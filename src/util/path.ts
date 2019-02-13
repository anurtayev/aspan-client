import { TEntryId } from '../model'

/**
 * Calculates parent folder id. If '/' passed then returns null.
 * @param currentFolder normalized and cleansed path.
 */
export const parentFolder = (currentFolder: TEntryId): TEntryId | null => {
  if (currentFolder === '/') return null
  const parts = currentFolder.split('/')
  if (parts.length === 2) return '/'
  return parts.slice(0, parts.length - 1).join('/')
}
