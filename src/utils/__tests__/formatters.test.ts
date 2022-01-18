import {formatBytes, formatGetImageData} from '../formatters';
import { Comment } from 'types/Comment';

const mockImageData = {
  data: [{
    comments: [],
    createdAt: 'yesterday',
    data: 'fake data',
    details: 'Not real',
    fileName: 'fakename.png',
    id: 1,
    lastCommentDate: 'now',
    name: 'test name',
    size: 234,
  }]
}

describe('testing formatting utils', () => {
  it('testing formatBytes', () => {
    expect(formatBytes(1024)).toBe('1 KB')
    expect(formatBytes(10232323)).toBe('9.76 MB')
    expect(formatBytes(1000000000000000)).toBe('909.49 TB')
  })

  it('testing formatGetImageData', () => {
    const formattedData = formatGetImageData(mockImageData)
    expect(formattedData).toHaveLength(1);
    expect(formattedData[0].data).toBe('fake data');
  })
})
