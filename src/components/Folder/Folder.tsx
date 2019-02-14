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
    <i className="far fa-folder fa-5x" />
    <p>{folder.name}</p>
  </div>
)
