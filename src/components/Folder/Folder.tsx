import './Folder.css'
import React from 'react'
import { IFolder, TEntryId } from '../../model'

export const Folder = ({
  folder,
  onFolderClick
}: {
  folder: IFolder
  onFolderClick: (folder: TEntryId) => void
}) => (
  <div
    className="Folder"
    onClick={() => {
      onFolderClick(folder.id)
    }}
  >
    <p>Folder</p>
    {folder.name}
  </div>
)
