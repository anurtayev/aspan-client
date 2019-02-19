import './File.css'
import React from 'react'
import { IFile } from '../../model'

export const File = ({ file }: { file: IFile }) => {
  const img = <img src={`data:image/png;base64,${file.thumbImage}`} />
  return (
    <div className="File">
      {file.thumbImage ? img : <i className="far fa-file fa-5x" />}
    </div>
  )
}
