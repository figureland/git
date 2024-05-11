import { inspect } from 'util'
import { status } from './git'

const name = 'vite-plugin-git'
const virtualModuleId = 'virtual:git'
const resolvedVirtualModuleId = '\0' + virtualModuleId

export const write = (s: GitInformation) => `
export const status = ${inspect(s)};
`

export const gitPlugin = () => {
  return {
    name,
    resolveId: (id: string) => {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load: (id: string) => {
      if (id === resolvedVirtualModuleId) {
        return write(status())
      }
    }
  }
}
