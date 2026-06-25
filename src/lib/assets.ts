/**
 * Путь к файлу из /public с учётом base URL (корень домена или подпапка на хостинге).
 */
export function asset(path: string): string {
  const normalized = path.replace(/^\//, '')
  const base = import.meta.env.BASE_URL
  return base.endsWith('/') ? `${base}${normalized}` : `${base}/${normalized}`
}
