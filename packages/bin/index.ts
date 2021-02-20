import fs from 'fs'
import path from 'path'

const link = (dtsDir: string, pkgName: string) => {
  if (pkgName === 'bin') {
    return
  }

  const typesPath = path.resolve(dtsDir, '../@types', pkgName)

  try {
    if (fs.statSync(typesPath).isSymbolicLink()) {
      return
    }
    fs.unlinkSync(typesPath)
  } catch {}

  fs.symlinkSync(path.resolve(dtsDir, pkgName), typesPath, 'dir')
}

export default (dtsDir: string) => {
  if (!fs.existsSync(dtsDir)) {
    console.warn('no `@d-ts` packages found')
    return
  }
  for (const pkgName of fs.readdirSync(dtsDir)) {
    link(dtsDir, pkgName)
  }
}
