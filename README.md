This is a tiny module which does thing, which is getting the active branch name and commit hash from git, if available. It then makes it available

## Usage

### Add it to `vite.config.ts`

```ts
import { gitPlugin } from '@figureland/vite-plugin-git'

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
