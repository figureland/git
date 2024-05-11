import { describe, it, expect } from 'bun:test'
import { status } from '../src/git'

describe('git', () => {
  it('returns git information', () => {
    const res = status()
    expect(res).toBeTruthy()
    expect(res.status).toBe('ok')
    if (res.status === 'ok') {
      expect(res.branch).toBeDefined()
      expect(res.commit).toBeDefined()
    }
  })
})
