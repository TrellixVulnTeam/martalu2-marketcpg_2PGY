import fetch from "unfetch";

const checkStatus = response => {
    if (response.ok) {
        return response;
    }
    // convert non-2xx HTTP responses into errors:
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);

}
export const getAllVisitors = () =>
    fetch("api/v1/visitors")
        .then(checkStatus);

export const addNewVisitor = visitor =>
    fetch("api/v1/visitors", {
        headers:{
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(visitor)
    });

