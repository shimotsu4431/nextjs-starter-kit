const routes = {
  home: () => `/`,
  sample: () => `/sample`,
}

export type RouteKeys = keyof typeof routes

export default routes
