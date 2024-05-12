A tiny tool for working with git and Typescript. I made this because I wanted a way of adding git information to be visible in the front-end.

It's so basic it probably doesn't need to be a library of its own. But I found myself needing this so often, I have packaged it up here for my own use.

## Basic usage

The node.js/bun side of this library exports three little functions. These will fail if you try to use them in the browser, because they depend on access to the filesystem and git in the command line.

```ts
import { git, state, isGitAvailable, commands } from '@figureland/git'

// 1. A very basic wrapper that is essentially just a way
// of calling 'git <command>' programmatically
const branchName: string = git('rev-parse --abbrev-ref HEAD')

// There are a few preset commands if, like me, you are constantly
// forgetting git commands.

const branchName: string = git(commands.branchName) // same as above

// 2. state() returns an object representing the current
// state of git in the current working directory
type GitInformation = {
  status: 'ok' | 'error'
  branch: string
  commitHash: string
  commitHashShort: string
  timestamp: string
  message: string
}
const gitState = state()

// 3. This one is hopefully self-explanatory

const available: boolean = isGitAvailable()
```

## Vite plugin

There is also a Vite plugin that does the same sort of thing but has the feature of adding git state throughout the whole app (front-end) using Vite's [virtual modules feature](https://vitejs.dev/guide/api-plugin#virtual-modules-convention).

### Add it to `vite.config.ts`

```ts
import { gitPlugin } from '@figureland/git/vite'

export default {
  plugins: [gitPlugin()]
}
```

### Import it in your Vite application

```ts
import { gitState } from 'virtual:git'

// gitState is a snapshot based on GitInformation (see above)
```

This might also be required in a declaration if you are using typescript.

```ts
/// <reference types="@figureland/git/module"/>
```

## Scripts

### Install

```bash
bun install
```

### Test

```bash
bun test
```

### Build

```bash
bun run build
```
