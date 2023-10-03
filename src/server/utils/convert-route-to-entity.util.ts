const mapping: Record<string, string> = {
  hospitals: 'hospital',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
