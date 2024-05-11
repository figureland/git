import { inspect } from 'util'
import { state } from '@figureland/git'

const name = 'vite-plugin-git'
const virtualModuleId = 'virtual:git'
const resolvedVirtualModuleId = '\0' + virtualModuleId

export const exportName = 'gitState'

export const write = (s: GitInformation) => `
export const ${exportName} = ${inspect(s)};
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
        return write(state())
      }
    }
  }
}
