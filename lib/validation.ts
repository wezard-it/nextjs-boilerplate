import { z } from 'zod'

export const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)
export const vatRegex = new RegExp(
    /^(ATU[A-Z0-9]{8}|BE0[0-9]{9}|BG[0-9]{9,10}|CHE[0-9]{9}(MWST|TVA|IVA)?|CY[0-9]{8}[A-Z]|CZ[0-9]{8,10}|DE[0-9]{9}|DK[0-9]{8}|EE[0-9]{9}|EL[0-9]{9}|ES[A-Z0-9]{9}|FI[0-9]{8}|FR[A-Z0-9]{2}[0-9]{9}|GB([0-9]{9}|[0-9]{12})|HR[0-9]{11}|HU[0-9]{8}|IE([0-9]S[0-9]{5}L|[0-9]{7}[A-W])|[0-9]{11}|LT([0-9]{9}|[0-9]{12})|LU[0-9]{8}|LV[0-9]{11}|MT[0-9]{8}|NL[A-Z0-9]{9}B[0-9]{2}|PL[0-9]{10}|PT[0-9]{9}|RO[0-9]{2,10}|SE[0-9]{12}|SI[0-9]{8}|SK[0-9]{10})$/m,
)
export const hoursRegex = new RegExp(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)

export const signUpFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, 'lenght_error'),
})

export const signInFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, 'lenght_error'),
})
