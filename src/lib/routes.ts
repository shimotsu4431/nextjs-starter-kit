const routes = {
  home: () => `/`,
  page1: () => `/page1`,
  page2: () => `/page2`,
}

export type RouteKeys = keyof typeof routes

export default routes
