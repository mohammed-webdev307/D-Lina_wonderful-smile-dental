import { i as HTTPResponse } from "../_libs/h3+rou3+srvx.mjs";
//#region #nitro/virtual/renderer-template
var rendererTemplate = () => new HTTPResponse("<!doctype html>\r\n<html lang=\"ar\" dir=\"rtl\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>عيادة الأمل لطب الأسنان | Al Amal Dental Clinic</title>\r\n    <meta name=\"description\" content=\"رعاية شاملة للأسنان في بيئة مريحة واهتمام شخصي بكل حالة.\" />\r\n    <link rel=\"icon\" type=\"image/png\" href=\"/favicon.png\" />\r\n    <meta property=\"og:title\" content=\"عيادة الأمل لطب الأسنان | Al Amal Dental Clinic\" />\r\n    <meta property=\"og:description\" content=\"رعاية شاملة للأسنان في بيئة مريحة واهتمام شخصي بكل حالة.\" />\r\n    <meta property=\"og:url\" content=\"https://al-amal-dental-clinic.vercel.app/\" />\r\n    <meta property=\"og:type\" content=\"website\" />\r\n    <meta property=\"og:image\" content=\"https://al-amal-dental-clinic.vercel.app/og-image.jpg\" />\r\n  </head>\r\n  <body>\r\n    <div id=\"root\"></div>\r\n    <script type=\"module\" src=\"/src/entry-client.tsx\"><\/script>\r\n  </body>\r\n</html>\r\n", { headers: { "content-type": "text/html; charset=utf-8" } });
//#endregion
//#region node_modules/nitro/dist/runtime/internal/routes/renderer-template.mjs
function renderIndexHTML(event) {
	return rendererTemplate(event.req);
}
//#endregion
export { renderIndexHTML as default };
