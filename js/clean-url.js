(() => {
  const supportedHosts = new Set(['dermability.org', 'www.dermability.org']);
  if (!supportedHosts.has(window.location.hostname)) return;

  const { pathname, search, hash } = window.location;
  let cleanPath;

  if (pathname.endsWith('/index.html')) {
    cleanPath = pathname.slice(0, -'index.html'.length);
  } else if (pathname.endsWith('.html')) {
    cleanPath = pathname.slice(0, -'.html'.length);
  }

  if (cleanPath && cleanPath !== pathname) {
    window.history.replaceState(null, '', `${cleanPath}${search}${hash}`);
  }
})();
