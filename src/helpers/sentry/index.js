import * as Sentry from "@sentry/react";
import {Integrations} from "@sentry/tracing";
import {SENTRY_SAMPLE_RATE, SENTRY_URL} from "../../constants";

const initSentry = () => {
  Sentry.init({
    dsn: SENTRY_URL,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: SENTRY_SAMPLE_RATE,
  });
};

export default initSentry;
