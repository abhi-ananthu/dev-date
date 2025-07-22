import z from 'zod';

export const ProfileSchema = z.object({
  githubusername: z.string().min(1),
  age: z
    .string()
    .transform((val) => parseInt(val))
    .check((val) => val >= 18),
  gender: z
    .string()
    .max(1)
    .check((val) => val in ['M', 'm', 'F', 'f']),
  interests: z.string().min(1),
  location: z.string().min(1),
  profession: z.string().min(1),
});

export const MatchSchmea = z.object({});

export const LikeSchmea = z.object({});

export const Message = z.object({});

export const Notification = z.object({});
