import './Folder.css'
import React from 'react'
import { IFolder, TEntryId } from '../../model'
import { ReactComponent as Logo } from './sunglasses.svg'

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
    <Logo />
    <p>{folder.name}</p>
  </div>
)
