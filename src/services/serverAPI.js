import "babel-polyfill";

export default class JIApi {
    _apiBase = "http://localhost:3004";


    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }




    getCatalogData = async (pid, filter) => {
        let purl;
        if(filter !== "") {
            purl = `/catalog?q=${filter}`;
        } else {
            purl = `/catalog?parentid=${pid}`;
        }

        const res = await this.getResource(purl);

        const parentData = (pid !== 0) ? await this.getResource(`/parents_id/${pid}`) : null;


        return {
            parents: (parentData) ? parentData.parents : null,
            categories: res.map(this._transformSCatalog)
        };
    };



    _transformSCatalog = (categories) => {
        // console.log(categories.title);
        return {
            id: categories.id,
            title: categories.title,
            description: categories.description
        };
    }

}