const getRepoDetails = (url: string) => {
    if (!url) throw new Error('URL not present');
    const match = url.match(/^https?:\/\/(www\.)?github.com\/(?<owner>[\w.-]+)\/(?<name>[\w.-]+)/);
    if (!match || !(match.groups?.owner && match.groups?.name)) throw new Error('Invalid URL');
    return { owner: match.groups.owner, repoName: match.groups.name };
};

export default getRepoDetails;
