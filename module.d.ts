import type { GitInformation } from './src/api'

declare module 'virtual:git' {
  const git: GitInformation
  export const git
}
