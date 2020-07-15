import fs from 'fs'
import { resolve } from 'path'

const link = (dtsDir: string, pkgName: string) => {
  if (pkgName === 'bin') {
    return
  }

  fs.symlinkSync(
    resolve(dtsDir, pkgName),
    resolve(dtsDir, '../@types', pkgName),
    'dir',
  )
}

export default (dtsDir: string) => {
  if (!fs.existsSync(dtsDir)) {
    console.warn('no `@d-ts` packages found')
    return
  }
  fs.readdirSync(dtsDir).forEach(pkgName => link(dtsDir, pkgName))
}
