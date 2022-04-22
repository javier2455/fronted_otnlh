export const helpHttp = () => {
    const customFetch = (endpoint, options) => {
        const defaultHeader = {
            accept: "application/json",
        };

        const controller = new AbortController();
        options.signal = controller.signal;

        options.method = options.method || "GET";
        options.headers = options.headers ? { ...defaultHeader, ...options.headers } : defaultHeader;

        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;

        //console.log(options);

        setTimeout(() => {
            controller.abort();
        }, 6000);

        return fetch(endpoint, options)
            .then((res) => res.ok
                ? res.json()
                : res.json()
                /* Promise.reject({
                    error: true,
                    status: res.status || "Error 00: La API no devolvio ningún status de error",
                    statusText: res.statusText || "Ocurrió un error",
                }) */)
            .catch((err) => err)
    }

    const get = (url, options = {}) => customFetch(url, options);

    const post = (url, options = {}) => {
        options.method = "POST";
        return customFetch(url, options)
    }
    const put = (url, options = {}) => {
        options.method = "PUT";
        return customFetch(url, options)
    }
    const del = (url, options = {}) => {
        options.method = "DELETE";
        return customFetch(url, options)
    }

    return {
        get, post, put, del
    }
}