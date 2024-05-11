import { describe, it, expect } from 'bun:test'
import { getGitInfo } from '../src/git'

describe('git', () => {
  it('returns git information', () => {
    const res = getGitInfo()
    expect(res).toBeTruthy()
    expect(res.status).toBe('ok')
    expect(res.branch).toBeDefined()
    expect(res.commit).toBeDefined()
  })
})
