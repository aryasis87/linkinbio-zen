export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://linkinbio-zen.vercel.app/sitemap.xml",
    host: "https://linkinbio-zen.vercel.app",
  };
}
