import { execSync } from 'node:child_process'
import type { GitInformation } from './api'

const executeGitCommand = (command: string) =>
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
      branch: executeGitCommand('git rev-parse --abbrev-ref HEAD'),
      commit: executeGitCommand('git rev-parse HEAD')
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
