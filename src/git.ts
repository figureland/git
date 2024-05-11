import { cmd } from './command'

export const git = (command: string) => cmd('git', command)

export const getGitInfo = (): GitInformation => {
  try {
    if (!isGitAvailable()) {
      throw new Error()
    }
    const result: GitInformation = {
      status: 'ok',
      branch: git('rev-parse --abbrev-ref HEAD'),
      commit: git('rev-parse HEAD')
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
    git('--version')
    return true
  } catch {
    return false
  }
}
