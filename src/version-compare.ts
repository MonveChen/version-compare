export type Version = string | number
export enum VersionIs {
  LessThan = -1,
  EqualTo = 0,
  GreaterThan = 1,
}

/**
 * Compare two versions quickly.
 * @param current Is this version greater, equal to, or less than the other?
 * @param other The version to compare against the current version
 * @return 1 if current is greater than other, 0 if they are equal or equivalent, and -1 if current is less than other
 */
export const versionCompare = (
  current: Version,
  other: Version
): VersionIs => {
  const cp = String(current).split('.')
  const op = String(other).split('.')
  for (let depth = 0; depth < Math.max(cp.length, op.length); depth++) {
    const cn = Number(cp[depth]) || 0
    const on = Number(op[depth]) || 0
    if (cn > on) return VersionIs.GreaterThan
    if (on > cn) return VersionIs.LessThan
    if (!isNaN(cn) && isNaN(on)) return VersionIs.GreaterThan
    if (isNaN(cn) && !isNaN(on)) return VersionIs.LessThan
  }
  return VersionIs.EqualTo
}