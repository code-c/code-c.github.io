import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "4zld49aw",
    dataset: "production",
    apiVersion: '2021-03-25', // use a UTC date string
    useCdn: true
})