import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kid, celebrities) => {
    for (const celebrity of celebrities) { 

        // Check if the celebrity's id matches the kid.celebrityId
        if (celebrity.id === kid.celebrityId) {

            //If there is a match, it will return the matching celebrity
            return celebrity
        }
    }
    return null //Returns null if there is no matching id
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        html += `
                <li>
                    ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
                </li>`
    }

    html += "</ul>"

    return html
}

