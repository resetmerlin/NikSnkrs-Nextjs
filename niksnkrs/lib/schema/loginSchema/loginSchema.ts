import { z } from 'zod';

export const loginSchema = z.object({
  userEmail: z
    .string()
    .regex(/^[^\s@]+@example\.com$/, '@example.com required')
    .min(1, 'Please write your email'),
  userPassword: z.string().min(1, 'Please write your password'),
});

export const requiredLogin = loginSchema.required({
  userEmail: true,
  userPassword: true,
});
