import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";


export const client = SanityClient({
    projectId: '8uxn35a7',
    dataset: 'production',
    apiVersion: '2022-04-24',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = new ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
