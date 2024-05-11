declare type GitInformation =
  | {
      status: 'ok'
      commitHash: string
      commitHashShort: string
      branch: string
      timestamp: string
      message: string
    }
  | {
      status: 'error'
    }

declare module 'virtual:git' {
  const gitState: GitInformation
  export const gitState
}
