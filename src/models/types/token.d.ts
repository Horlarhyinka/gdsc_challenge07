import { Document } from "mongoose";

export interface TokenSchema implements Document{
    accesssToken: string
    refreshToken: string
    expireAt: number
    isExpired: ()=>boolean
    refresh: ()=>Promise<TokenSchema>
}