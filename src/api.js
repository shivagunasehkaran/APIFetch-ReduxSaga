const people = [
    { name: 'Nader', age: 36 },
    { name: 'Amanda', age: 24 },
    { name: 'Jason', age: 44 }
]

export default () => {
    return fetch(`https://api.openbrewerydb.org/breweries`).then(x => x.json()).then(y => y).catch(e => console.log(e));
}