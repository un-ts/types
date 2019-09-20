import { exec as _exec } from 'child_process'
import { readdir as _readdir } from 'fs'
import { promisify } from 'util'

const exec = promisify(_exec)
const readdir = promisify(_readdir)

readdir('packages')
  .then(pkgs =>
    Promise.all(
      pkgs.map(pkg => exec(`yarn dtslint --expectOnly packages/${pkg}`)),
    ),
  )
  .catch(e => {
    // tslint:disable-next-line no-console
    console.error(e)
    process.exitCode = 1
  })
