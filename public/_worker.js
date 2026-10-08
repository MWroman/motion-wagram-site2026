export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/') {
      const preference = (request.headers.get('Cookie') || '').match(/(?:^|;\s*)mw_locale=(fr|en)(?:;|$)/)?.[1];
      const locale = preference || (request.cf?.country === 'FR' ? 'fr' : 'en');
      url.pathname = `/${locale}/`;
      return new Response(null, { status: 302, headers: {
        Location: url.toString(), 'Cache-Control': 'private, no-store', Vary: 'Cookie'
      }});
    }
    // Old portfolio links remain valid without applying geography to locale routes.
    if (/^\/(work|projects|mentions-legales|confidentialite)(\/|$)/.test(url.pathname)) {
      url.pathname = `/en${url.pathname}`;
      return Response.redirect(url.toString(), 301);
    }
    if (/^\/production-evenementielle\/?$/.test(url.pathname)) {
      url.pathname = '/fr/'; url.hash = 'about';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  }
};
