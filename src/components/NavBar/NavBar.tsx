import './NavBar.css'
import React from 'react'
import { TEntryId } from '../../model'
import { parentFolder } from './../../util'

export const NavBar = ({
  gotoFolder,
  currentFolder
}: {
  gotoFolder: (folder: TEntryId) => void
  currentFolder: TEntryId
}) => {
  const parentFolderId = parentFolder(currentFolder)
  return (
    <div className="NavBar">
      <button
        className="pure-button pure-button-primary NavBar__Element"
        onClick={() => {
          gotoFolder('/')
        }}
      >
        <i className="fas fa-home" />
      </button>
      {parentFolderId && (
        <button
          className="pure-button pure-button-primary NavBar__Element"
          onClick={() => {
            gotoFolder(parentFolderId)
          }}
        >
          <i className="fas fa-arrow-alt-circle-up" />
        </button>
      )}
      <span className="NavBar__Element">{currentFolder}</span>
    </div>
  )
}
