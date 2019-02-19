import './Browser.css'
import React from 'react'
import { TEntry, TEntryId } from '../../model'
import { File } from '../File'
import { Folder } from '../Folder'

export const Browser = ({
  entries,
  gotoFolder
}: {
  entries: TEntry[]
  gotoFolder: (folder: TEntryId) => void
}) => {
  const sortedEntries = [
    ...entries.filter(entry => entry.type === 'folder').sort(),
    ...entries.filter(entry => entry.type === 'file').sort()
  ]
  return (
    <div className="Browser-flex">
      {sortedEntries.map(entry =>
        entry.type === 'file' ? (
          <File file={entry} key={entry.id} />
        ) : (
          <Folder folder={entry} gotoFolder={gotoFolder} key={entry.id} />
        )
      )}
    </div>
  )
}
