import { LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react"
import prisma, { IGod } from '~/lib/db.server'
import { capitalize } from '~/lib/utils';
import { getRelations, getLang, getNames } from '~/lib/getData'

import styling from '~/styles/component'
export const links:LinksFunction = () => { return [styling()] }

export const loader = async ({ params }:{ params:any }) => {
    let page = await prisma.norse.findUnique({where:{name:params.name}})
    return { data: page }
}



export default function():JSX.Element {
    const { data }:{ data:IGod } = useLoaderData()

    return (
        <div className='container'>
            <h1 className="title">{data?.name.toUpperCase()}</h1>
            <div className="info" key={data.name}>
                <h2>Information</h2>
                <section className="names">
                    <h3 className="title">Names</h3>
                    <div>
                        {getNames(data)}
                    </div>
                </section>
                <section className="other">
                    <p className="gender">Gender: {capitalize(data?.gender)}</p>
                </section>
                {getRelations(data)}
            </div>
        </div>
    )
}