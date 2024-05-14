import { cli } from './cli'
import * as commands from './commands'

export const parseURL = (gitUrl: string): string | null => {
  const sshPrefix = 'git@'
  const httpsPrefix = 'https://'
  const sshDomainSuffix = ':'

  if (gitUrl.startsWith(sshPrefix) && gitUrl.includes(sshDomainSuffix)) {
    try {
      const withoutPrefix = gitUrl.substring(sshPrefix.length)
      const colonIndex = withoutPrefix.indexOf(sshDomainSuffix)
      const domain = withoutPrefix.substring(0, colonIndex)
      const path = withoutPrefix.substring(colonIndex + 1).replace(/\.git$/, '') // Remove .git suffix

      const url = new URL(`${httpsPrefix}${domain}/${path}`)
      return url.href
    } catch {
      return null
    }
  } else {
    return null
  }
}

export const git = (command: string) => cli('git', command)

export const state = (): GitInformation => {
  try {
    if (!isGitAvailable()) {
      throw new Error()
    }
    const url = parseURL(git(commands.url))

    const result: GitInformation = {
      status: 'ok',
      branch: git(commands.branchName),
      commitHashShort: git(commands.commitHashShort),
      commitHash: git(commands.commitHash),
      timestamp: git(commands.timestamp),
      message: git(commands.message),
      ...(url && {
        url,
        githubCommit: `${url}/commit/${git(commands.commitHash)}`
      })
    }
    return result
  } catch (e) {
    console.log(e)
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
