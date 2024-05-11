import { describe, it, expect } from 'bun:test'
import { state } from '../src/git'
import { write } from '../src/vite'

describe('vite', () => {
  it('prints git status', () => {
    const res = state()
    expect(write(res)).toBeDefined()
  })
})
