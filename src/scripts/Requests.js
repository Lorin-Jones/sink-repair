import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"
import { fetchPlumbers } from "./dataAccess.js"
let plumbers = fetchPlumbers()
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
                                <select class="plumbers" id="plumbers">
                                    <option value="">Choose</option>
                                    ${
                                        plumbers.map(
                                            plumber => {
                                                return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
                                            }
                                        ).join("")
                                    }
                                </select>
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
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = { }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

        }
    }
)