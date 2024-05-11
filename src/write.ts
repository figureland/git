import type { GitInformation } from './api'
export const write = (info: GitInformation) => `
import type { GitInformation } from '@figureland/vite-plugin-git'

export const git: GitInformation = {
    status: ${info.status},
    branch: "${info.branch}",
    commit: "${info.commit}",
}
`
