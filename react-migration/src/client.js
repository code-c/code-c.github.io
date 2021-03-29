import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "4zld49aw",
    dataset: "production",
    useCdn: true
})