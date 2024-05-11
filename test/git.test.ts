import { describe, it, expect } from 'bun:test'
import { state } from '../src/git'

describe('git', () => {
  it('returns git information', () => {
    const res = state()
    expect(res).toBeTruthy()
    expect(res.status).toBe('ok')
    console.log(res)
    if (res.status === 'ok') {
      expect(res.branch).toBeDefined()
      expect(res.commitHash).toBeDefined()
      expect(res.commitHashShort).toBeDefined()
      expect(res.timestamp).toBeDefined()
    }
  })
})
