import { exec as _exec } from 'child_process'
import { readdir as _readdir } from 'fs'
import { promisify } from 'util'

const exec = promisify(_exec)
const readdir = promisify(_readdir)

const IGNORED_PKGS = ['bin']

readdir('packages')
  .then(pkgs =>
    Promise.all(
      pkgs
        .filter(pkg => !IGNORED_PKGS.includes(pkg))
        .map(pkg => exec(`yarn dtslint --expectOnly packages/${pkg}`)),
    ),
  )
  .catch((e: Error) => {
    console.error(e)
    process.exitCode = 1
  })
