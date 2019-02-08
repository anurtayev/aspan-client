export type TEntryId = string
export type TContentType = string
export type TFileSystemPath = string
export type TAttributeType = string | boolean | number
export type TSearchPattern = string

export type TAttribute = [string, TAttributeType]

export interface IMetaData {
  tags?: string[]
  attributes?: TAttribute[]
}

/**
 * Basic file system entry interface.
 */
export interface IEntry {
  id: TEntryId
  isFile: boolean
  name: string
  parentId: TEntryId
}

export interface IFile extends IEntry {
  contentType: string
  size: number
}

export interface IFolder extends IEntry {
  children?: IEntry[]
}
