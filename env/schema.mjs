import { z } from 'zod';

export const serverSchema = z.object({
  API_URL: z.string().url(),
  UPLOADS_URL: z.string().url(),
  AUTH0_SECRET: z.string().length(64),
  AUTH0_BASE_URL: z.string().url(),
  AUTH0_ISSUER_BASE_URL: z.string().url(),
  AUTH0_DOMAIN: z.string().url(),
  AUTH0_CLIENT_ID: z.string(),
  AUTH0_CLIENT_SECRET: z.string(),
  AUTH0_ALLOWED_CALLBACK: z.string().url(),
  AUTH0_ALLOWED_LOGOUT_URL: z.string().url(),
  DATABASE_URL: z.string().url(),
});

export const clientSchema = z.object({
  NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL: z.string().url(),
  NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: z.string(),
});

export const clientEnv = {
  NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL,
  NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
};
