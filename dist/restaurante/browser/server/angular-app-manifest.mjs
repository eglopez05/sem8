
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 419, hash: '503d8f2bac1a1282b7aa61ee2e84d9eed0f79343810120c07aea809600b65dcf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 932, hash: '260c928d766424d949214b13067c833e3e7b2b781e76f7a23a8924df022406b0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
