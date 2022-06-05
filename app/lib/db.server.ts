import { PrismaClient } from "@prisma/client"

const prisma:PrismaClient = new PrismaClient()
export default prisma

export interface IGod {
    name:string
    description?:string
    name_eng:string
    name_is?:string
    name_pg?:string
    name_eng_runic?:string
    name_pg_runic?:string
    gender:'male'|'female'|'unknown'
    mother?:string
    father?:string
    siblings?:string
    children?:string
    lovers?:string
}