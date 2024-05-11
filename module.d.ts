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
  const gitState: GitInformation
  export const gitState
}
