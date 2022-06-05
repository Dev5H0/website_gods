import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react"
import prisma from '~/lib/db.server'

export const loader = async () => { return json(await prisma.norse.findMany()) }
export default function():JSX.Element { return (<p>{JSON.stringify(useLoaderData())}</p>) }
