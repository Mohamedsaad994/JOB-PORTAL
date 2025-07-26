import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://cf408a8c6037389aaf42e21bb576d6a0@o4509729662566400.ingest.us.sentry.io/4509729674297344",
  sendDefaultPii: true,
});
