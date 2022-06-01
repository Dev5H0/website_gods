import { LinksFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react"
import prisma, { IGod } from '~/lib/db.server'
import { capitalize } from '~/lib/utils';

import styling from '~/styles/component'
const links:LinksFunction = () => { return [styling()] }

const TBA:string = 'TBA'
const path:string = '/gods/norse/'
export const loader = async ({ params }:{ params:any }) => { return { data: await prisma.norse.findUnique({where:{name:params.name}}) } }

export default function() {
    const { data }:{ data?:IGod } = useLoaderData()

    if (data == undefined) return (
        <div className='error'>This page does not exist.</div>
    )

    return (
        <div className='container'>
            <h1>{data?.name.toUpperCase()}</h1>
            <div className="info" key={data.name}>
                <h2>Information</h2>
                <div className="names">
                    <p className="name_en">English Name: {capitalize(data.name_eng) || TBA}</p>
                    <p className="name_pg">Icelandic Name: {capitalize(data.name_is) || TBA}</p>
                    <p className="name_pg">Proto-Germanic Name: {capitalize(data.name_pg) || TBA}</p>
                    <p className="name_en_rune">Runic English Name: {capitalize(data.name_eng_runic) || TBA}</p>
                    <p className="name_pg_rune">Runic Proto-Germanic Name: {capitalize(data.name_pg_runic) || TBA}</p>
                </div>
                <p className="gender">Gender: {capitalize(data?.gender)}</p>
                <div className="relations">
                    <h3>Relations</h3>
                    <div className="lovers">
                        <h4>Lovers</h4>
                        <ul className="relations_list">{data.lovers?.split(',').map((lover) => { return (<li><Link to={path+lover}>{capitalize(lover)}</Link></li>) }) || TBA}</ul>
                    </div>
                    <div className="siblings">
                        <h4>Siblings</h4>
                        <ul className="relations_list"> {data.siblings?.split(',').map((sibling) => { return (<li><Link to={path+sibling}>{capitalize(sibling)}</Link></li>) }) || TBA}</ul>
                    </div>
                    <div className="parents">
                        <h4>Parents</h4>
                        <ul>
                            <li>Mother: <Link to={path+data.mother}>{capitalize(data.mother) || TBA}</Link></li>
                            <li>Father: <Link to={path+data.father}>{capitalize(data.father) || TBA}</Link></li>
                        </ul>
                    </div>
                    <div className="children">
                        <h4>Children</h4>
                        <ul className="relations_list"> {data.children?.split(',').map((child) => { return (<li><Link to={path+child}>{capitalize(child)}</Link></li>) }) || TBA}</ul>
                    </div>
                </div>
            </div>
        </div>
    )
}