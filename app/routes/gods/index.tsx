import { Link } from "@remix-run/react"

const path = '/gods/'

export default function():JSX.Element {
	return (
		<div className='container'>
			<h1>Gods</h1>
			<div className="gods">
				<ul className='gods_norse'>
					<li><Link to={path+'norse/'}><h2>Norse</h2></Link></li>
				</ul>
			</div>
		</div>
	)
}
