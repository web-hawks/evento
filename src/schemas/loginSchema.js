
import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string()
        .nonempty("Email is required")
        .email("Invalid email format"),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/\d/, "Password must contain at least one number")
        .regex(/[!@#$%^&*()]/, "Password must contain at least one special character"),
});