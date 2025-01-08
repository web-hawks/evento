import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().nonempty('Email is required').email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
});
