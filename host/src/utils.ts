/** True when `pathname` is `prefix` itself or any path below it. */
export const isUnder = (pathname: string, prefix: string) =>
  prefix === '/' ? pathname === '/' : pathname === prefix || pathname.startsWith(`${prefix}/`);
