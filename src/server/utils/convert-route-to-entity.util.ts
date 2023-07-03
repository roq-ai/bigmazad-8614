const mapping: Record<string, string> = {
  ads: 'ad',
  bids: 'bid',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
