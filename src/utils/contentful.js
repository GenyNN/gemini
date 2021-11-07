import {createClient} from 'contentful';

var client;

export function getInitClient() {
    if (!client) {
        const contentfulParam = {
            accessToken: 'cbcd39c95b61a3474515bb76f63784ff289880b5ebae93b5f860dd04104049ab',
            space: 'h08acp3v47ka',
            host: 'cdn.contentful.com'
        };
        client = createClient(contentfulParam)
    }

    return client;
}

