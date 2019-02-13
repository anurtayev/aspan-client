import './File.css'
import React from 'react'
import { IFile } from '../../model'

export const File = ({ file }: { file: IFile }) => (
  <div className="File">
    <p>File</p>
    <div>{file.name}</div>
  </div>
)
