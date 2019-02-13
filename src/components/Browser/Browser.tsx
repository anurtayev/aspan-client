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
}) => (
  <div className="Browser">
    {entries.map(entry =>
      entry.type === 'file' ? (
        <File file={entry} key={entry.id} />
      ) : (
        <Folder folder={entry} gotoFolder={gotoFolder} key={entry.id} />
      )
    )}
  </div>
)
