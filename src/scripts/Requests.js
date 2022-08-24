import { getRequests } from "./dataAccess.js"
const mainContainer = document.querySelector("#container")


// const convertRequests = (request) => {
//     let html = ""
//     html += `
//         <li id="request">${request.description}</li>
//         <li id="request">${request.address}</li>
//         <li id="request">${request.budget}</li>
//         <li id="request">${request.neededBy}</li>
//         `
//     return html
// }
export const Requests = () => {
    const requests = getRequests()
    let html = ""
    
    const listItems = requests.map(
                    (request) => {
                        return `<ul>
                            <li id="request">
                                ${request.description}
                                <button class="request__delete"
                                        id="request--${request.id}">
                                    Delete
                                </button>
                            </li>
                            <li id="request">${request.address}</li>
                            <li id="request">${request.budget}</li>
                            <li id="request">${request.neededBy}</li>
                        </ul>`
                    }
                )
    html += listItems.join("")
    return html
}

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})