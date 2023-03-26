/**
 * Returns the ID of the current route
 *
 * @remarks
 * Leading and trailing slashes are removed to ensure the computed hash key
 * is consistent with the route path
 */
export function usePathSegments(route = useRoute()) {
  const locale = useRouteLocale(route)
  const hasLocalePrefix = route.path.startsWith(`/${locale}`)

  // Remove leading locale from path if present
  const id = route.path.replace(new RegExp(`^/${locale}`), '')

  return {
    hasLocalePrefix,
    locale,
    id: withoutTrailingSlash(withoutLeadingSlash(id)),
  }
}

function withoutLeadingSlash(input = '') {
  return input.startsWith('/') ? input.slice(1) : input
}

function withoutTrailingSlash(input = '') {
  return input.endsWith('/') ? input.slice(0, -1) : input
}
