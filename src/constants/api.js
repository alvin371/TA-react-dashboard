export const API_URL = "http://localhost:8005";

export const ENDPOINTS = {
  LOGIN: "/user/login",
  CITY: "/city",
  BRANCH: {
    DEFAULT: "/branch",
    ALL: "/branch/all-branch",
  },
  SALESMAN: "/sales",
  ACCOUNT: "/user",
  ROLE: "/role",
  INSTANT_APPROVAL: {
    DEFAULT: "/instant-approval",
    DETAIL: "/instant-approval/details",
  },
  TESTIMONY: "/testimony",
  HISTORY_LOG: {
    DEFAULT: "/log-history",
    EXPORT: "/log-history/export",
  },
  PROMO: {
    DEFAULT: "/promo",
    DRAFT: "/promo/draft",
    SLUG: "/promo/slug",
    UPDATE_STATUS: "/promo/update-status",
    SETTING: "/promo/setting-page",
  },
};
