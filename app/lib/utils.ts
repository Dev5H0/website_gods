export enum Lang {
    icelandic = 'is',
    english = 'en',
    proto_germanic = 'pg'
}

export function capitalize(str?:string):string|undefined {
    if (str == undefined) return
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function pageExists(name:string):boolean {
    return false
}