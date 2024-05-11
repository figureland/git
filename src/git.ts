import { cmd } from './command'

export const commands = {
  branchName: 'rev-parse --abbrev-ref HEAD',
  commitHashShort: 'rev-parse --short HEAD',
  commitHash: 'rev-parse HEAD',
  timestamp: `--no-pager log -1 --pretty='format:%cd' --date='format:%Y-%m-%d %H:%M:%S'`,
  message: 'log -1 --pretty=%B'
}

export const git = (command: string) => cmd('git', command)

export const state = (): GitInformation => {
  try {
    if (!isGitAvailable()) {
      throw new Error()
    }
    const result: GitInformation = {
      status: 'ok',
      branch: git(commands.branchName),
      commitHashShort: git(commands.commitHashShort),
      commitHash: git(commands.commitHash),
      timestamp: git(commands.timestamp),
      message: git(commands.message)
    }
    return result
  } catch {
    return {
      status: 'error'
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
