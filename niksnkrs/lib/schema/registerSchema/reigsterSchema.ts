import { z } from 'zod';

export const registerSchema = z
  .object({
    userEmail: z
      .string()
      .regex(/^[^\s@]+@example\.com$/, '@example.com required')
      .min(1, 'Please write your email'),

    userPassword: z.string().min(1, 'Please write your password'),
    userConfirmPassword: z
      .string()
      .min(1, 'Please write your confirm password'),
    userName: z.string().min(1, 'Please write your name'),
  })
  .refine((data) => data.userPassword === data.userConfirmPassword, {
    message: 'Passwords do not match',
    path: ['userConfirmPassword'], // This specifies which field the error is associated with
  });
