/**
* Environment configuration using `@t3-oss/env-nextjs` and `zod` for validation.
* This file is used to define the environment variables that are required by the application.
@throws {Error} If the environment variables are not valid.
 */

import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
    server: {
        NEXTAUTH_URL: z.string().min(1),
        NEXTAUTH_SECRET: z.string().min(1),
    },
    client: {
        NEXT_PUBLIC_API_URL: z.string().min(1),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    },
})
