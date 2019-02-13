import { parentFolder } from './path'

it('returns null for root folder', () => {
  const folder = '/'
  const parentFolderId = parentFolder(folder)
  expect(parentFolderId).toBeNull()
})

it('calculates parent of 1st level subfolder', () => {
  const folder = '/fo1'
  const parentFolderId = parentFolder(folder)
  expect(parentFolderId).toEqual('/')
})

it('calculates parent of 2nd level subfolder', () => {
  const folder = '/fo1/sfo1'
  const parentFolderId = parentFolder(folder)
  expect(parentFolderId).toEqual('/fo1')
})

it('calculates parent of 3rd level subfolder', () => {
  const folder = '/fo1/sfo1/bindje'
  const parentFolderId = parentFolder(folder)
  expect(parentFolderId).toEqual('/fo1/sfo1')
})
