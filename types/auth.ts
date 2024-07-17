export type AuthUser = {
    id: string
    email: string
    access_token: Token
    refresh_token: Token
}

export type Token = {
    token: string
    expires_at: string
}
