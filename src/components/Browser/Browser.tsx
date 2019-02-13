import './Browser.css'
import React from 'react'
import { TEntry, TEntryId } from '../../model'
import { File } from '../File'
import { Folder } from '../Folder'

export const Browser = ({
  entries,
  onFolderClick
}: {
  entries: TEntry[]
  onFolderClick: (folder: TEntryId) => void
}) => (
  <div className="Browser">
    {entries.map(entry => (
      <div key={entry.id}>
        {entry.type === 'file' ? (
          <File file={entry} />
        ) : (
          <Folder folder={entry} onFolderClick={onFolderClick} />
        )}
      </div>
    ))}
  </div>
)
