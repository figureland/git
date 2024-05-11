export const write = (info: GitInformation) => `
export const git = {
    status: ${info.status},
    branch: "${info.branch}",
    commit: "${info.commit}",
} as const
`
