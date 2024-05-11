import { getGitInfo } from './git'

const name = 'vite-plugin-git'
const virtualModuleId = 'virtual:git'
const resolvedVirtualModuleId = '\0' + virtualModuleId

export const write = (info: GitInformation) => `
export const git = {
    status: "${info.status}",
    branch: "${info.branch}",
    commit: "${info.commit}"
};
`

export const gitPlugin = () => {
  const info = write(getGitInfo())
  return {
    name,
    resolveId: (id: string) => {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load: (id: string) => {
      if (id === resolvedVirtualModuleId) {
        return info
      }
    }
  }
}
