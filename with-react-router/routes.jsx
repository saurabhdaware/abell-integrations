import React from "react"

// Eagerly loads page on server and code-splits on client (similar to loadable of webpack)
const crossEnvCodeSplit = async (importFn) => {
  if (import.meta.env.SSR) {
    return importFn().then(mod => mod.default)
  } else {
    return React.lazy(importFn)
  }
}

const Index = await crossEnvCodeSplit(() => import('./src/Index'));
const About = await crossEnvCodeSplit(() => import('./src/About'));

export const routes = [
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/about',
    element: <About />
  }
]