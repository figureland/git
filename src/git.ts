/// <reference types="node" />
import { execSync } from 'node:child_process'

const git = (command: string) =>
  execSync(command)
    .toString('utf8')
    .replace(/[\n\r\s]+$/, '')

export const getGitInfo = (): GitInformation => {
  try {
    if (!isGitAvailable()) {
      throw new Error()
    }
    const result: GitInformation = {
      status: 'ok',
      branch: git('git rev-parse --abbrev-ref HEAD'),
      commit: git('git rev-parse HEAD')
    }
    return result
  } catch {
    return {
      status: 'error',
      branch: '',
      commit: ''
    }
  }
}

export const isGitAvailable = () => {
  try {
    execSync('git --version')
    return true
  } catch {
    return false
  }
}
