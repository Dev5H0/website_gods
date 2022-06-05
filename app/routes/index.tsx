import { LinksFunction } from '@remix-run/node'
import styling from '~/styles/component'
import { useLoaderData, Link } from "@remix-run/react"
import prisma, { IGod } from '~/lib/db.server'

const links:LinksFunction = () => { return [styling()] }

export const loader = async () => { return { data: { norse: await prisma.norse.findMany() } } }
const path = '/gods/'

export default function() {
	const { data } = useLoaderData()

	return (
		<div className='container'>
			<h1>Gods</h1>
			<div className="gods_norse">
				<ul>
					<li><Link to={path+'norse/'}><h2>Norse</h2></Link></li>
				</ul>
				{/* <h2><Link to='/gods/norse/'>Norse</Link></h2> */}
				{/* <ul>{data.norse.map((god:IGod) => (<li key={god.name}><Link to={path+'norse/'+god.name}>{capitalize(god.name)}</Link></li>))}</ul> */}
			</div>
		</div>
	)
}
