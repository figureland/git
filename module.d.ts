import type { GitInformation } from './src/api'

declare module 'virtual:*' {
  const git: GitInformation
  export const git
}
