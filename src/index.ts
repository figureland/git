import { write } from './write'
import { getGitInfo } from './git'

const virtualModuleId = 'virtual:git'
const resolvedVirtualModuleId = '\0' + virtualModuleId

export const gitPlugin = () => {
  return {
    name: 'vite-plugin-git',
    resolveId: (id: string) => {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load: (id: string) => {
      if (id === resolvedVirtualModuleId) {
        return write(getGitInfo())
      }
    }
  }
}
