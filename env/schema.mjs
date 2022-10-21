import { z } from 'zod';

export const serverSchema = z.object({
  API_URL: z.string().url(),
  UPLOADS_URL: z.string().url(),
  AUTH0_DOMAIN: z.string(),
  AUTH0_CLIENT_ID: z.string(),
  AUTH0_CLIENT_SECRET: z.string(),
  AUTH0_ALLOWED_CALLBACK: z.string(),
  AUTH0_ALLOWED_LOGOUT_URL: z.string(),
});
