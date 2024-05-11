declare type GitInformation = {
  status: 'ok' | 'error'
  commit: string
  branch: string
}

declare module 'virtual:git' {
  const git: GitInformation
  export const git
}
