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
interface IBasicEntry {
  id: TEntryId
  name?: string
  parentId?: TEntryId
  metaData?: IMetaData
}

export interface IFile extends IBasicEntry {
  type: 'file'
  contentType?: string
  size?: number
  image?: string
  thumbImage?: string
}

export interface IFolder extends IBasicEntry {
  type: 'folder'
  children?: TEntry[]
}

export type TEntry = IFile | IFolder
