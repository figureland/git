A tiny collection of helpers for working with git and Typescript.

## Vite plugin usage

### Add it to `vite.config.ts`

```ts
import { gitPlugin } from '@figureland/git/vite'

export default {
  plugins: [gitPlugin()]
}
```

### Import it in your Vite application

```ts
import { git } from 'virtual:git'

// git is the following:
type GitInformation = {
  status: 'ok' | 'error'
  branch: string
  commit: string
}
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
