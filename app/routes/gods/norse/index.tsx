import { LinksFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react"
import prisma, { IGod } from '~/lib/db.server'
import { capitalize } from '~/lib/utils';

import styling from '~/styles/css/info.css'
const links:LinksFunction = () => { return [{rel:'stylesheet', href:styling}] }

export const loader = async () => { return { data: { norse: await prisma.norse.findMany() } } }

export default function() {
	const { data } = useLoaderData()

	return (
		<div>
			<h1>Norse Gods</h1>
			<ul>{data.norse.map((god:IGod) => (<li key={god.name}><Link to={'/gods/norse/'+god.name}>{capitalize(god.name)}</Link></li>))}</ul>
		</div>
	)
}
