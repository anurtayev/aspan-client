import './Folder.css'
import React from 'react'
import { IFolder, TEntryId } from '../../model'

export const Folder = ({
  folder,
  gotoFolder
}: {
  folder: IFolder
  gotoFolder: (folder: TEntryId) => void
}) => (
  <div
    className="Folder"
    onClick={() => {
      gotoFolder(folder.id)
    }}
  >
    <p>Folder</p>
    {folder.name}
  </div>
)
