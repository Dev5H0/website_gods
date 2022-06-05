import { Link } from "@remix-run/react"
import { IGod } from '~/lib/db.server'
import { capitalize } from '~/lib/utils';

const path:string = '/gods/norse/'
const TBA:string = 'TBA'

export function getLang(data:IGod, lang:string):JSX.Element|undefined {
    let dp:JSX.Element|undefined
    switch (lang) {
        case 'en': if (data.name_eng) dp = (<p className="name">English Name: {data.name_eng}</p>)
        break

        case 'is': if (data.name_is) dp = (<p className="name">Icelandic Name: {data.name_is}</p>)
        break

        case 'pg': if (data.name_pg) dp = (<p className="name">Proto-Germanic Name: {data.name_pg}</p>)
        break

        case 'en_r': if (data.name_eng_runic) dp = (<p className="name">Runic English Name: {data.name_eng_runic}</p>)
        break

        case 'is_r': if (data.name_is_runic) dp = (<p className="name">Runic Icelandic Name: {data.name_is_runic}</p>)
        break

        case 'pg_r': if (data.name_pg_runic) dp = (
        <p className="name">Runic Proto-Germanic Name: {data.name_pg_runic}</p>
        )
        dp += (<br />)
        break

        case '': if (data.name_eng) dp = (
                <dl>
                    <dt>English</dt>
                    <dd>{data.name_eng}</dd>
                </dl>
            )
        break

        default: dp = undefined
        break
    }

    return dp
}

export function getNames(data:IGod):JSX.Element {
    return (
        <dl>
            <dt>English</dt>
            <dd className='name'>{data.name_eng}</dd>
            <dt>Icelandic</dt>
            <dd className='name'>{data.name_is}</dd>
            <dt>Proto-Germanic</dt>
            <dd className='name'>{data.name_pg}</dd>
            {getLang(data,'en')}
            {getLang(data,'is')}
            {getLang(data,'pg')}
            {getLang(data,'en_r')}
            {getLang(data,'is_r')}
            {getLang(data,'pg_r')}
        </dl>
    )
}

export function getRelations(data:IGod):JSX.Element|undefined {
    return (
        <section className="relations" >
            <h3>Relations</h3>
            <div className="parents">
            </div>
            <div className="lovers">
                <h4>Lovers:</h4>
                <ul className="relations_list">{data.lovers?.split(',').map((lover) => { return (<li><Link to={path+lover}>{capitalize(lover)}</Link></li>) }) || TBA}</ul>
            </div>
            <div className="siblings">
                <h4>Siblings: </h4>
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
                <h4 className="title">Children:</h4>
                <ul className="relations_list"> {data.children?.split(',').map((child) => { return (<li><Link to={path+child}>{capitalize(child)}</Link></li>) }) || TBA}</ul>
            </div>
        </section>
    )
}

