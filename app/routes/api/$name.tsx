import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react"
import prisma from '~/lib/db.server'

export const loader = async ({ params }:{ params:any }) => { return json(await prisma.norse.findUnique({where:{name:params.name}})) }
export default function():JSX.Element { return (<p>{JSON.stringify(useLoaderData())}</p>) }
