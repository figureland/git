import { describe, it, expect } from 'bun:test'
import { status } from '../src/git'
import { write } from '../src/vite'

describe('vite', () => {
  it('prints git status', () => {
    const res = status()
    expect(write(res)).toBeDefined()
  })
})
