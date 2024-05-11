import type { Plugin } from 'vite'
import { write } from './write'
import { getGitInfo } from './git'

export type { GitInformation } from './api'

const virtualModuleId = 'virtual:git'
const resolvedVirtualModuleId = '\0' + virtualModuleId

export const gitPlugin = (): Plugin => {
  return {
    name: 'vite-plugin-git',
    resolveId: (id) => {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load: (id) => {
      if (id === resolvedVirtualModuleId) {
        return write(getGitInfo())
      }
    }
  }
}
