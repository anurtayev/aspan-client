import './File.css'
import React from 'react'
import { IFile } from '../../model'

export const File = ({ file }: { file: IFile }) => (
  <div className="File">
    <i className="far fa-file fa-5x" />
    <p>{file.name}</p>
  </div>
)
