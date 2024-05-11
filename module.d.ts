declare type GitInformation =
  | {
      status: 'ok'
      commit: string
      commitShort: string
      branch: string
    }
  | {
      status: 'error'
    }

declare module 'virtual:git' {
  const git: GitInformation
  export const git
}
